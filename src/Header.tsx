import React from 'react';
import Logo from './Logo';
import './Header.css';

interface HeaderProps {
  onSignUpClick: () => void;
  onSignInClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUpClick, onSignInClick }) => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <a href="#about" className="nav-about">About</a>
        <a href="#" className="nav-signup" onClick={(e) => {
          e.preventDefault();
          onSignUpClick();
        }}>Sign up</a>
        <a 
          href="#" 
          className="nav-signin" 
          onClick={(e) => {
            e.preventDefault();
            onSignInClick();
          }}>Sign in</a>
      </nav>
    </header>
  );
};

export default Header;