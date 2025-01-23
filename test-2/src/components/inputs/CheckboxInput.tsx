import React, { forwardRef } from 'react';

interface CheckboxInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
  error?: string;
}

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ label, description, error, id, className = '', ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            ref={ref}
            id={inputId}
            className={`
              h-4 w-4 rounded 
              border-gray-300 
              text-blue-600
              focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? 'border-red-300 focus:ring-red-500' : ''}
              ${className}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        <div className="text-sm leading-6">
          <label 
            htmlFor={inputId}
            className="font-medium text-gray-900"
          >
            {label}
          </label>
          {description && (
            <p className="text-gray-500 mt-1">{description}</p>
          )}
          {error && (
            <p 
              className="text-sm text-red-600 mt-1"
              id={`${inputId}-error`}
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
); 