import { z } from 'zod';

// Define the profile schema
export const profileSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(32, 'First name must be less than 32 characters')
    .trim(),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(32, 'Last name must be less than 32 characters')
    .trim(),
  phoneNumber: z.string()
    .min(1, 'Phone number is required')
    .regex(/^\d{8}$/, 'Phone number must be exactly 8 digits')
    .trim(),
  receiveNewsletter: z.boolean()
});

// Infer the type from the schema
export type ProfileFormData = z.infer<typeof profileSchema>;

// Simple validation function that returns either the data or validation errors
export const validateProfile = (data: unknown) => {
  const result = profileSchema.safeParse(data);
  return result.success
    ? { data: result.data }
    : { errors: result.error.issues.map(issue => ({
        path: issue.path[0] as keyof ProfileFormData,
        message: issue.message
      }))
    };
}; 