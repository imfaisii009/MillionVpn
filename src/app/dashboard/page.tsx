import { createClient } from '@/lib/supabase/server'
import StatsCard from '@/components/dashboard/StatsCard'
import SignupsChart from '@/components/dashboard/SignupsChart'
import SourcePieChart from '@/components/dashboard/SourcePieChart'
import { Users, UserPlus, Clock, TrendingUp } from 'lucide-react'

async function getWaitlistStats() {
  const supabase = await createClient()

  // Get total waitlist count
  const { count: totalCount } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  // Get waitlist entries from last 7 days
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  const { count: recentCount } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', sevenDaysAgo.toISOString())

  // Get entries from previous 7 days for trend calculation
  const fourteenDaysAgo = new Date()
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)

  const { count: previousWeekCount } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', fourteenDaysAgo.toISOString())
    .lt('created_at', sevenDaysAgo.toISOString())

  // Get breakdown by source
  const { data: sourceBreakdown } = await supabase
    .from('waitlist')
    .select('source')

  const sourceCounts = sourceBreakdown?.reduce((acc, entry) => {
    const source = entry.source || 'unknown'
    acc[source] = (acc[source] || 0) + 1
    return acc
  }, {} as Record<string, number>) || {}

  // Get recent signups
  const { data: recentSignups } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  // Get daily signups for the last 14 days
  const { data: allSignups } = await supabase
    .from('waitlist')
    .select('created_at')
    .gte('created_at', fourteenDaysAgo.toISOString())
    .order('created_at', { ascending: true })

  // Process daily signups data
  const dailySignups: Array<{ date: string; count: number }> = []
  const dateMap = new Map<string, number>()

  // Initialize all days with 0
  for (let i = 13; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    dateMap.set(dateStr, 0)
  }

  // Count signups per day
  allSignups?.forEach((signup) => {
    const date = new Date(signup.created_at)
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    if (dateMap.has(dateStr)) {
      dateMap.set(dateStr, (dateMap.get(dateStr) || 0) + 1)
    }
  })

  // Convert to array
  dateMap.forEach((count, date) => {
    dailySignups.push({ date, count })
  })

  // Get today's signups
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const { count: todayCount } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', today.toISOString())

  return {
    totalCount: totalCount || 0,
    recentCount: recentCount || 0,
    previousWeekCount: previousWeekCount || 0,
    todayCount: todayCount || 0,
    sourceCounts,
    recentSignups: recentSignups || [],
    dailySignups,
  }
}

export default async function DashboardPage() {
  const stats = await getWaitlistStats()

  const weeklyTrend = stats.previousWeekCount > 0
    ? Math.round(((stats.recentCount - stats.previousWeekCount) / stats.previousWeekCount) * 100)
    : stats.recentCount > 0 ? 100 : 0

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's your waitlist overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Subscribers"
          value={stats.totalCount}
          icon={Users}
          description="All time signups"
        />
        <StatsCard
          title="This Week"
          value={stats.recentCount}
          icon={UserPlus}
          trend={{
            value: weeklyTrend,
            isPositive: weeklyTrend >= 0,
          }}
        />
        <StatsCard
          title="Today"
          value={stats.todayCount}
          icon={TrendingUp}
          description="Signups today"
        />
        <StatsCard
          title="Avg. Daily"
          value={stats.recentCount > 0 ? (stats.recentCount / 7).toFixed(1) : '0'}
          icon={Clock}
          description="Last 7 days"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SignupsChart data={stats.dailySignups} />
        <SourcePieChart data={stats.sourceCounts} />
      </div>

      {/* Recent Signups Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Signups</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stats.recentSignups.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No signups yet
                  </td>
                </tr>
              ) : (
                stats.recentSignups.map((signup) => (
                  <tr key={signup.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {signup.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {signup.name || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700">
                        {signup.source || 'unknown'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(signup.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
