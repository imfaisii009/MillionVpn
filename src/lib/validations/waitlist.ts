import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
  name: z
    .string()
    .max(255, 'Name is too long')
    .optional()
    .transform((val) => val?.trim() || undefined),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
