import React, { forwardRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, id, required, className = '', ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full space-y-2">
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full px-4 py-2.5 rounded-lg text-gray-900 
              border border-gray-300 
              placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
              ${className}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg 
                className="w-5 h-5 text-red-500" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          )}
        </div>
        
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
    );
  }
); 