import React, { useState } from 'react';
import './styles/LoginPanel.css';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginPanel = ({ show, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [error, setError] = useState('');
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [resetErr, setResetErr] = useState('');


  // Field-specific error messages
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmErr, setConfirmErr] = useState('');

  const validateFirstName = (value) => {
    setFirstName(value);
    setFirstNameErr(/^[A-Za-z\s]{2,}$/.test(value) ? '' : 'Enter a valid first name');
  };

  const validateLastName = (value) => {
    setLastName(value);
    setLastNameErr(/^[A-Za-z\s]{2,}$/.test(value) ? '' : 'Enter a valid last name');
  };

  const validateEmail = (value) => {
    setEmail(value);
    setEmailErr(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email');
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordErr(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(value)
      ? ''
      : 'Min 6 chars, 1 uppercase, 1 lowercase, 1 digit');
  };

  const validateConfirm = (value) => {
    setConfirm(value);
    setConfirmErr(value === password ? '' : 'Passwords do not match');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem('loggedInUser', JSON.stringify(found));
      alert(`Welcome, ${found.name}!`);
      setError('');
      onClose();
      window.location.reload();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (firstNameErr || lastNameErr || emailErr || passwordErr || confirmErr) {
      setError('Please fix all errors before submitting.');
      return;
    }

    if (!firstName || !lastName || !email || !password || !confirm) {
      setError('All fields are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const alreadyExists = users.some(u => u.email === email);
    if (alreadyExists) {
      setError('Email already registered. Please log in.');
      return;
    }

    const newUser = {
      name: firstName,
      email,
      password,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created. Please log in.');
    setIsSignup(false);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirm('');
    setAgree1(false);
    setAgree2(false);
    setError('');
  };

  return (
    <>
      <div className={`login-overlay ${show ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`login-panel ${show ? 'active' : ''}`}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{isSignup ? 'SIGN UP' : 'LOG IN'}</h2>

        {isSignup && <a href="#" className="back-link" onClick={() => setIsSignup(false)}>Back</a>}

        <div className="social-login">
          <FaLinkedin className="icon" />
          <FcGoogle className="icon" />
        </div>

        <p className="disclaimer">
          By signing on using these social channels, you acknowledge you have read the&nbsp;
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>

        <div className="or-divider">OR</div>

        {!showForgot && (
          <form onSubmit={isSignup ? handleSignup : handleLogin}>
            {/* signup-only fields */}
            {isSignup && (
              <>
                <label>First Name*</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={e => validateFirstName(e.target.value)}
                />
                {firstNameErr && <span className="error-text">{firstNameErr}</span>}

                <label>Last Name*</label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={e => validateLastName(e.target.value)}
                />
                {lastNameErr && <span className="error-text">{lastNameErr}</span>}
              </>
            )}

            <label>Email Address*</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={e => validateEmail(e.target.value)}
            />
            {emailErr && <span className="error-text">{emailErr}</span>}

            <label>
              Password* <span className="info-icon" title="Minimum 6 characters">ⓘ</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => validatePassword(e.target.value)}
            />
            {passwordErr && <span className="error-text">{passwordErr}</span>}

            {/* confirm password and checkboxes */}
            {isSignup && (
              <>
                <label>Confirm Password*</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirm}
                  onChange={e => validateConfirm(e.target.value)}
                />
                {confirmErr && <span className="error-text">{confirmErr}</span>}

                <p className="policy-text">
                  We collect and process your Personal data when you sign-up.
                  To see how we store and process your personal data, please see our
                  <Link to="/privacy-policy"> Privacy Policy.</Link>
                </p>

                <div className="checkbox-container">
                  <input type="checkbox" checked={agree1} onChange={e => setAgree1(e.target.checked)} />
                  <label>
                    I would like to be kept updated on exclusive news, travel inspiration and receive tailored communications.
                  </label>
                </div>

                <div className="checkbox-container">
                  <input type="checkbox" checked={agree2} onChange={e => setAgree2(e.target.checked)} />
                  <label>
                    I agree to allow Leisure to offer me a personalised experience based on my interests and interactions.
                  </label>
                </div>
              </>
            )}

            {!isSignup && (
              <a href="#" className="forgot" onClick={() => setShowForgot(true)}>
                Don’t remember your password?
              </a>
            )}

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="login-btn">
              {isSignup ? 'SIGN UP' : 'LOG IN'}
            </button>
          </form>
        )}


        {showForgot && (
          <div className="reset-password-container">
            <h2>RESET PASSWORD</h2>

            {!verified ? (
              <>
                <label>Email Address*</label>
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                />
                {resetErr && <span className="error-text">{resetErr}</span>}
                <button
                  type="button"
                  onClick={() => {
                    const users = JSON.parse(localStorage.getItem('users')) || [];
                    const user = users.find(u => u.email === resetEmail);
                    if (user) {
                      setVerified(true);
                      setResetErr('');
                      alert('Email verified! Please enter a new password.'); // simulate OTP success
                    } else {
                      setResetErr('Email not found in our records.');
                    }
                  }}
                >
                  Verify Email
                </button>
              </>
            ) : (
              <>
                <label>New Password*</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => {
                    const users = JSON.parse(localStorage.getItem('users')) || [];
                    const updatedUsers = users.map(u =>
                      u.email === resetEmail ? { ...u, password: newPassword } : u
                    );
                    localStorage.setItem('users', JSON.stringify(updatedUsers));
                    alert('Password reset successful! Please login.');
                    // Reset states
                    setShowForgot(false);
                    setVerified(false);
                    setResetEmail('');
                    setNewPassword('');
                  }}
                >
                  Reset Password
                </button>
              </>
            )}

            <span className="back-link" onClick={() => {
              setShowForgot(false);
              setVerified(false);
              setResetEmail('');
              setNewPassword('');
            }}>
              Back to Login
            </span>
          </div>
        )}



        <div className="signup-cta">
          <p>{isSignup ? 'ALREADY HAVE AN ACCOUNT?' : 'DO NOT HAVE AN ACCOUNT?'}</p>
          <button className="signup-btn" onClick={() => {
            setIsSignup(!isSignup);
            setError('');
          }}>
            {isSignup ? 'LOG IN' : 'SIGN UP'}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPanel;
