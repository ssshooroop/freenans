import React, { useState } from 'react';
import './SignUpForm.css';

interface SignUpFormProps {
  onClose: () => void;
  onSignInClick?: () => void;
  onUserDataFormOpen: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ 
  onClose, 
  onSignInClick,
  onUserDataFormOpen 
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [wasSubmitted, setWasSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: ''
    };

    if (!formData.email) {
      newErrors.email = 'Enter your email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Hmm, that doesn’t look like a real email!';
    }

    if (!formData.password) {
      newErrors.password = 'Ah… where is the password?';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Almost there! Password needs at least 6 characters long';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWasSubmitted(true);
    
    if (validateForm()) {
      onUserDataFormOpen();
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Your email"
              className={`signup-input ${wasSubmitted && errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              autoComplete="off"
            />
            {wasSubmitted && errors.email && 
              <div className="error-message">{errors.email}</div>
            }
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Set the password"
              className={`signup-input ${wasSubmitted && errors.password ? 'error' : ''}`}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              autoComplete="new-password"
            />
            {wasSubmitted && errors.password && 
              <div className="error-message">{errors.password}</div>
            }
          </div>

          <button 
            type="submit" 
            className="create-button"
          >
            Create account
          </button>
          
          <div className="signup-prompt">
            <span>Already have an account?</span>
            <a href="#" className="signup-link" onClick={(e) => {
              e.preventDefault();
              if (onSignInClick) onSignInClick();
            }}>Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;