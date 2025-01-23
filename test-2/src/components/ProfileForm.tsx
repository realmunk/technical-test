import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { mockPost } from '../services/api';
import { ProfileFormData, profileSchema } from '../validation/profileSchema';
import { PersonalInformation } from './form-sections/PersonalInformation';
import { Preferences } from './form-sections/Preferences';
import { FormError } from './form-sections/FormError';
import { SuccessMessage } from './form-sections/SuccessMessage';

export const ProfileForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      receiveNewsletter: false
    }
  });

  const handleFormReset = () => {
    setSuccessMessage('');
    reset();
  };

  const onSubmit = async (data: ProfileFormData) => {
    try {
      setSuccessMessage('');
      const response = await mockPost(data);
      
      if (response.errors) {
        response.errors.forEach(error => {
          setError(error.path, { message: error.message });
        });
        const errorCount = response.errors.length;
        const errorMessage = `Form submission failed with ${errorCount} ${
          errorCount === 1 ? 'error' : 'errors'
        }. Please correct the highlighted fields.`;
      } else {
        const successMsg = 'Profile updated successfully!';
        setSuccessMessage(successMsg);
        setTimeout(handleFormReset, 5000);
      }
    } catch (error) {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setError('root', { message: errorMessage });
    }
  };

  return (
    <main className="min-h-screen w-full flex">
      <section className="w-full lg:w-1/2 bg-white" aria-label="Profile form section">
        <div className="h-full w-full flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-lg">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            </header>

            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-8"
              noValidate
              aria-label="Profile information form"
              aria-describedby={errors.root ? "form-error" : undefined}
            >
              {/* Live region for form status */}
              <div 
                role="status" 
                aria-live="polite" 
                aria-atomic="true"
                className="sr-only"
              >
                {isSubmitting ? 'Form is being submitted...' : ''}
              </div>

              {/* Success Message */}
              {successMessage && (
                <SuccessMessage message={successMessage} />
              )}

              {/* Form Error */}
              <FormError message={errors.root?.message} />

              {/* Form Sections */}
              <PersonalInformation 
                register={register}
                errors={errors}
              />

              <Preferences 
                register={register}
              />

              {/* Form Controls */}
              <div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                role="group"
                aria-label="Form controls"
              >
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : 'Save changes'}
                </button>

                <button
                  type="button"
                  className="flex-1 bg-gray-50 text-gray-700 px-6 py-3.5 rounded-xl font-semibold
                    hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out
                    border border-gray-200 hover:border-gray-300"
                  onClick={handleFormReset}
                  disabled={isSubmitting}
                >
                  Reset form
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Hero section */}
      <aside 
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-purple-700"
        aria-hidden="true"
      />
    </main>
  );
} 