import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('heart_counter')
      .select('count')
      .eq('id', 'global')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch count' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      count: data.count,
    });
  } catch (error) {
    console.error('Hearts API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // Atomic increment using RPC function
    const { data, error } = await supabase.rpc('increment_hearts');

    if (error) {
      console.error('Supabase RPC error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to increment count' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      count: data,
    });
  } catch (error) {
    console.error('Hearts API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
