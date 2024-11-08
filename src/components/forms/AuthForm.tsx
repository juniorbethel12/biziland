import React from 'react';
import InputField from './InputField';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (e: React.FormEvent) => void;
  formData: {
    email: string;
    password: string;
    username?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
  isLoading: boolean;
}

export default function AuthForm({ type, onSubmit, formData, onChange, errors, isLoading }: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {type === 'register' && (
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username || ''}
          onChange={onChange}
          error={errors.username}
        />
      )}
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        error={errors.password}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : type === 'login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}