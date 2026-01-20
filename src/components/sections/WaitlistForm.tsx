'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { waitlistSchema, type WaitlistFormData } from '@/lib/validations/waitlist';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface WaitlistFormProps {
  source?: 'hero' | 'modal' | 'footer';
  className?: string;
}

export default function WaitlistForm({ source = 'hero', className }: WaitlistFormProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [serverError, setServerError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setFormState('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.code === 'DUPLICATE_EMAIL') {
          setFormState('success');
          return;
        }
        throw new Error(result.error || 'Something went wrong');
      }

      setFormState('success');
      reset();
    } catch (error) {
      setFormState('error');
      setServerError(error instanceof Error ? error.message : 'Please try again');
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <AnimatePresence mode="wait">
        {formState === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-trust-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-trust-emerald" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-600 mb-4">
              We&apos;ll notify you when MillionVPN launches with your exclusive{' '}
              <span className="font-semibold text-primary-600">30% early-bird discount</span>.
            </p>
            <button
              onClick={() => {
                setFormState('idle');
                reset();
              }}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Sign up another email
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-primary-600 font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Get 30% off when we launch</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={cn(
                    'w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white',
                    'focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none',
                    'text-gray-900 placeholder-gray-400',
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  )}
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className={cn(
                  'px-8 py-3.5 rounded-xl font-bold text-white',
                  'bg-primary-600 hover:bg-primary-700',
                  'transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5',
                  'disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0',
                  'flex items-center justify-center gap-2 whitespace-nowrap'
                )}
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>

            {errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.email.message}
              </p>
            )}

            {formState === 'error' && serverError && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {serverError}
              </p>
            )}

            <p className="text-xs text-gray-400 text-center">No spam, ever. Unsubscribe anytime.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
