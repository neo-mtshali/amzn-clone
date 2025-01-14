import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation (you should add more robust validation)
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Create user with email and password using Firebase
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Update user profile with display name (optional)
        userCredential.user.updateProfile({
          displayName: name,
        })
          .then(() => {
            // Navigate to home page after successful registration
            navigate('/');
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="register__container">
        <h1>Create account</h1>

        <form onSubmit={handleRegister}>
          <h5>Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
            required
          />

          <h5>Mobile number or email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            required
          />

          <p className="register__passwordInfo">
            Passwords must be at least 6 characters.
          </p>

          <h5>Re-enter password</h5>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="register__registerButton">
            Continue
          </button>

          {error && <p className="register__error">{error}</p>}

          <p className="register__terms">
            By creating an account, you agree to Amazon's
            <a href="#">Conditions of Use</a> and
            <a href="#">Privacy Notice</a>.
          </p>
        </form>

        <div className="register__divider">
          <h5>Buying for work?</h5>
        </div>

   
          <button className="register__businessButton">
            Create a free business account
          </button>
       

        <div className="register__divider">
          <h5>Already have an account?</h5>
        </div>

        <Link to="/login">
          <button className="register__signInButton">Sign in</button>
        </Link>
      </div>

      <div className="register__footer">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
      </div>
      <p className="register__copyright">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}

export default Register;