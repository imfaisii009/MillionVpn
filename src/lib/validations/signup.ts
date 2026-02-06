import { z } from 'zod';

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
  password: z
    .string()
    .min(1, 'Password is required'),
});

export type SignupFormData = z.infer<typeof signupSchema>;

// Alias for inline Hero form (same schema)
export const signupFormSchema = signupSchema;

export type SignupFormSchemaData = z.infer<typeof signupFormSchema>;
