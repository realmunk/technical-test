import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { CheckboxInput } from '../inputs/CheckboxInput';
import { ProfileFormData } from '../../validation/profileSchema';

interface PreferencesProps {
  register: UseFormRegister<ProfileFormData>;
}

export const Preferences: React.FC<PreferencesProps> = ({
  register,
}) => {
  return (
    <section 
      className="space-y-6"
      aria-labelledby="preferences-heading"
    >
      <h2 
        id="preferences-heading"
        className="text-lg font-medium text-gray-900"
      >
        Communication Preferences
      </h2>
      
      <div className="space-y-4">
        <CheckboxInput
          {...register('receiveNewsletter')}
          label="Receive newsletter"
          description="Get notified about company news and product updates."
        />
      </div>
    </section>
  );
}; 