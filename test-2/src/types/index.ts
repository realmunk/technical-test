export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  receiveNewsletter: boolean;
}

export interface ValidationError {
  path: keyof Profile;
  message: string;
}

export interface ServerResponse {
  errors?: ValidationError[];
  profile?: Profile;
}

export interface InputChangeHandler {
  (event: React.ChangeEvent<HTMLInputElement>, value: string | boolean, name: keyof Profile): void;
}

export interface TextInputProps {
  name: keyof Profile;
  value: string;
  onChange: InputChangeHandler;
  type?: string;
  label: string;
  error?: string;
  id?: string;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  disabled?: boolean;
}

export interface CheckboxInputProps {
  name: keyof Profile;
  checked: boolean;
  onChange: InputChangeHandler;
  label: string;
  id?: string;
  description?: string;
  disabled?: boolean;
  'aria-describedby'?: string;
} 