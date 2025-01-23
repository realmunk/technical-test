import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextInput } from '../inputs/TextInput';
import { ProfileFormData } from '../../validation/profileSchema';

interface PersonalInformationProps {
  register: UseFormRegister<ProfileFormData>;
  errors: {
    firstName?: { message?: string };
    lastName?: { message?: string };
    phoneNumber?: { message?: string };
  };
}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
  register,
  errors,
}) => {
  return (
    <section 
      className="space-y-6"
      aria-labelledby="personal-information-heading"
    >
      <h2 
        id="personal-information-heading"
        className="text-lg font-medium text-gray-900"
      >
        Personal Information
      </h2>
      
      <div className="space-y-4">
        <TextInput
          {...register('firstName')}
          label="First name"
          error={errors.firstName?.message}
          required
          autoComplete="given-name"
          aria-required="true"
        />

        <TextInput
          {...register('lastName')}
          label="Last name"
          error={errors.lastName?.message}
          required
          autoComplete="family-name"
          aria-required="true"
        />

        <TextInput
          {...register('phoneNumber')}
          label="Phone number"
          type="tel"
          error={errors.phoneNumber?.message}
          required
          autoComplete="tel"
          pattern="[0-9]{8}"
          inputMode="numeric"
          aria-required="true"
        />
      </div>
    </section>
  );
}; 