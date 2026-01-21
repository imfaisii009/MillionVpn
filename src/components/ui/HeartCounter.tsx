'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flame, Rocket, ThumbsUp } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type ReactionType = 'heart' | 'fire' | 'rocket' | 'thumbs';

interface Reaction {
  type: ReactionType;
  emoji: string;
  icon: typeof Heart;
  gradient: string;
  color: string;
}

const REACTIONS: Reaction[] = [
  { type: 'heart', emoji: '❤️', icon: Heart, gradient: 'from-red-400 to-pink-500', color: 'text-red-500' },
  { type: 'fire', emoji: '🔥', icon: Flame, gradient: 'from-orange-400 to-red-500', color: 'text-orange-500' },
  { type: 'rocket', emoji: '🚀', icon: Rocket, gradient: 'from-violet-400 to-purple-500', color: 'text-violet-500' },
  { type: 'thumbs', emoji: '👍', icon: ThumbsUp, gradient: 'from-blue-400 to-indigo-500', color: 'text-blue-500' },
];

interface FloatingEmoji {
  id: string;
  x: number;
  emoji: string;
}

function formatCount(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1)}K`;
  }
  return count.toString();
}

export default function HeartCounter() {
  const [count, setCount] = useState<number>(0);
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  // Spawn a floating emoji (used both locally and from broadcast)
  const spawnFloatingEmoji = useCallback((emoji: string, id?: string) => {
    const newEmoji: FloatingEmoji = {
      id: id || `${Date.now()}-${Math.random()}`,
      x: Math.random() * 60 - 30,
      emoji,
    };
    setFloatingEmojis((prev) => [...prev, newEmoji]);

    // Remove after animation
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 1500);
  }, []);

  // Fetch initial count
  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch('/api/hearts');
        const data = await response.json();
        if (data.success) {
          setCount(data.count);
        }
      } catch (error) {
        console.error('Failed to fetch heart count:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCount();
  }, []);

  // Subscribe to real-time updates (count changes + emoji broadcasts)
  useEffect(() => {
    const channel = supabase
      .channel('reactions_room')
      // Listen for count updates from database
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'heart_counter',
          filter: 'id=eq.global',
        },
        (payload) => {
          setCount(payload.new.count);
        }
      )
      // Listen for emoji broadcasts from other users
      .on(
        'broadcast',
        { event: 'emoji' },
        (payload) => {
          // Spawn the emoji that another user sent
          spawnFloatingEmoji(payload.payload.emoji, payload.payload.id);
        }
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      supabase.removeChannel(channel);
    };
  }, [spawnFloatingEmoji]);

  // Handle reaction click
  const handleClick = async (reaction: Reaction) => {
    const emojiId = `${Date.now()}-${Math.random()}`;

    // Spawn locally immediately (optimistic)
    spawnFloatingEmoji(reaction.emoji, emojiId);

    // Broadcast to all other users
    if (channelRef.current) {
      channelRef.current.send({
        type: 'broadcast',
        event: 'emoji',
        payload: { emoji: reaction.emoji, id: emojiId },
      });
    }

    // Increment count in database
    try {
      const response = await fetch('/api/hearts', { method: 'POST' });
      const data = await response.json();
      if (!data.success) {
        console.error('Failed to increment count');
      }
    } catch (error) {
      console.error('Failed to increment count:', error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 relative">
      {/* Pretty phrase */}
      <p className="text-gray-500 text-3xl font-handwriting font-medium transform -rotate-2 mb-6">
        Spread some love to the world
      </p>

      {/* Container for Buttons + Emojis */}
      <div className="relative">
        {/* Floating emojis container - Positioned to pop out from behind buttons */}
        <div className="absolute top-2 left-0 right-0 flex justify-center pointer-events-none z-0">
          <AnimatePresence>
            {floatingEmojis.map((emoji) => (
              <motion.div
                key={emoji.id}
                initial={{ opacity: 0, y: 10, x: emoji.x, scale: 0.5 }}
                animate={{ opacity: [0, 1, 1, 0], y: -120, x: emoji.x, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, times: [0, 0.1, 0.8, 1], ease: 'easeOut' }}
                className="absolute text-3xl"
              >
                {emoji.emoji}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Reaction buttons row - z-10 to stay on top */}
        <div className="relative z-10 flex items-center gap-3 p-2 bg-gray-900/90 backdrop-blur-sm rounded-full shadow-xl">
          {REACTIONS.map((reaction) => {
            const Icon = reaction.icon;
            return (
              <motion.button
                key={reaction.type}
                onClick={() => handleClick(reaction)}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15, y: -4 }}
                className={`relative p-3 rounded-full bg-gradient-to-br ${reaction.gradient} shadow-lg hover:shadow-xl transition-all`}
                aria-label={`Send ${reaction.type}`}
              >
                <Icon className="w-6 h-6 text-white fill-white" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Count display */}
      <div className="text-center">
        <motion.p
          key={count}
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl font-bold text-gray-800"
        >
          {isLoading ? '...' : formatCount(count)}
        </motion.p>
        <p className="text-sm text-gray-500">people shared the love</p>
      </div>
    </div>
  );
}
