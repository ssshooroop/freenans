import React, { useState } from 'react';
import './SignInForm.css';

interface SignInFormProps {
  onClose: () => void;
  onSignUpClick?: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onClose, onSignUpClick }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: ''
    };

    if (!formData.email) {
      newErrors.email = 'We can`t recognize you without email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Check again — that email needs a bit more love.';
    }

    if (!formData.password) {
      newErrors.password = 'Say your password and we let you in.';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWasSubmitted(true);
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Здесь будет логика входа через API
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Login attempt with:', formData);
        onClose();
      } catch (err) {
        setErrors({
          ...errors,
          password: err instanceof Error ? err.message : 'An error occurred'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="signin-overlay">
      <div className="signin-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Your email"
              className={`signin-input ${wasSubmitted && errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              autoComplete="email"
            />
            {wasSubmitted && errors.email && 
              <div className="error-message">{errors.email}</div>
            }
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Your password"
              className={`signin-input ${wasSubmitted && errors.password ? 'error' : ''}`}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              autoComplete="current-password"
            />
            {wasSubmitted && errors.password && 
              <div className="error-message">{errors.password}</div>
            }
          </div>

          <button 
            type="submit" 
            className="create-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log in'}
          </button>

          <div className="signin-form-signup-prompt">
            <span>Don't have an account yet?</span>
            <a href="#" className="signin-form-signup-link" onClick={(e) => {
              e.preventDefault();
              if (onSignUpClick) onSignUpClick();
            }}>
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;