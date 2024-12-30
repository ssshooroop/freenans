import React, { useState } from 'react';
import AbstractShape from './AbstractShape';
import Header from './Header';
import Documents from './Documents';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './LandingPage.css';
import UserDataForm from './UserDataForm';

const LandingPage: React.FC = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isUserDataOpen, setIsUserDataOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleSignUpClick = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInOpen(false);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleSwitchToSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleSwitchToSignIn = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  const handleOpenUserData = () => {
    setIsSignUpOpen(false);  // закрываем форму регистрации
    setIsUserDataOpen(true); // открываем форму данных пользователя
  };

  const handleCloseUserData = () => {
    setIsUserDataOpen(false);
  };

  return (
    <div className="landing-page">
      <div className="abstract-shape-container">
        <AbstractShape />
      </div>
      <Header 
        onSignUpClick={handleSignUpClick}
        onSignInClick={handleSignInClick}
      />
      <main>
        <section className="hero">
          <div className="hero-documents">
            <Documents />
          </div>
          <div className="hero-content">
            <h1>Effortless accounting for freelancers</h1>
            <h2>Say goodbye to annoying routines — interlinked invoicing, order and client management, as well as analytics in one place in just a few clicks</h2>
            <p>Start managing your finances smarter — try Freenans today!</p>
            <button className="cta-button" onClick={handleSignUpClick}>
              TRY NOW
            </button>
          </div>
        </section>
      </main>
      <footer></footer>
      {isSignUpOpen && (
        <SignUpForm 
          onClose={handleCloseSignUp}
          onSignInClick={handleSwitchToSignIn}
          onUserDataFormOpen={handleOpenUserData}  // передаем новый проп
        />
      )}
      {isSignInOpen && (
        <SignInForm 
          onClose={handleCloseSignIn}
          onSignUpClick={handleSwitchToSignUp}
        />
      )}
      {isUserDataOpen && (
        <UserDataForm 
          onClose={handleCloseUserData}
        />
      )}
    </div>
  );
};

export default LandingPage;