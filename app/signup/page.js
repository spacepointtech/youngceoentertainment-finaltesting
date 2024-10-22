// // SignupPage Landing Page

// import React from 'react';
// import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignupPage() {
//   return (
//     <div className="login-wrapper">
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form>
//             <input type="email" placeholder="Email" className="login-input" required />
//             <input type="password" placeholder="Password" className="login-input" required />
//             <div className="policy-checkbox">
//               <input type="checkbox" id="agree-policy" className="policy-input" required />
//               <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//             </div>
//             <button type="submit" className="login-button">Become The Young CEO Now!!</button>
//             <button type="button" className="google-login-button">
//               <FaGoogle className="google-icon" />
//               Continue With Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client'
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!validatePassword(password)) {
  //     setError('Password must be at least 8 characters long, contain an uppercase letter, a special symbol, and a number.');
  //     return;
  //   }
  
  //   try {
  //     const response = await fetch('http://localhost:5000/api/signup', { // Updated the URL here
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  
  //     const data = await response.json();
  //     if (response.ok) {
  //       window.location.href = '/subscription';
  //     } else {
  //       setError(data.message || 'Something went wrong. Please try again.');
  //     }
  //   } catch (error) {
  //     setError('Network error: Something went wrong. Please try again.');
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, contain an uppercase letter, a special symbol, and a number.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Store the token in cookies or local storage
        document.cookie = `authToken=${data.token}; path=/`;
  
        // Redirect to subscription page
        window.location.href = '/subscription';
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Network error: Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="login-wrapper">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Become The Young CEO!</h2>
          <p className="login-subtitle">
            Already Young CEO?{' '}
            <Link href="/login" className="signup-link">Log In</Link>
          </p>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="policy-checkbox">
              <input type="checkbox" id="agree-policy" className="policy-input" required />
              <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
            </div>
            <button type="submit" className="login-button">Become The Young CEO Now!!</button>
            <button type="button" className="google-login-button">
              <FaGoogle className="google-icon" />
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

