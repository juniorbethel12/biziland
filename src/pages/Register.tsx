import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthForm from '../components/forms/AuthForm';
import { setUser, setToken } from '../store/slices/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // TODO: Replace with actual API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: { 
              id: '1', 
              email: formData.email, 
              username: formData.username, 
              role: 'user' 
            },
            token: 'mock-token',
          });
        }, 1000);
      });

      dispatch(setUser(response.user));
      dispatch(setToken(response.token));
      navigate('/');
    } catch (error) {
      setErrors({ email: 'Registration failed' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to existing account
            </Link>
          </p>
        </div>
        <AuthForm
          type="register"
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleChange}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}