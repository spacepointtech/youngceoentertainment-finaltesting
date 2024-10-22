// // SignupPage.js Landing

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

// SignupPage.js with Oauth...

'use client';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios'; // For HTTP requests

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [formData, setFormData] = useState({
    artistName: '',
    whatsappNumber: '',
    signedToLabel: '',
    nextSongDistribution: '',
    distributedBefore: '',
    spotifyLink: '',
    youtubeLink: '',
    instagramHandle: '',
    currentCost: '',
    currentPlan: '',
    issuesFaced: '',
    upcomingSongs: '',
    feedback: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Check if the user already exists
      const response = await axios.post('/api/signup', { email, password });
      if (response.data.userExists) {
        setUserExists(true);
      } else {
        // Show the questionnaire if user is new
        setShowQuestionnaire(true);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleSubmitQuestionnaire = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/questionnaire', formData);
      // Redirect or show a success message
    } catch (error) {
      console.error('Questionnaire submission error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleGoogleLogin = () => {
    // Implement Google login (OAuth2 or Firebase)
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
        {userExists ? (
          <p>User already exists. <Link href="/login">Log In</Link></p>
        ) : (
          !showQuestionnaire ? (
            <div className="login-form-container">
              <h2 className="login-title">Become The Young CEO!</h2>
              <p className="login-subtitle">
                Already Young CEO?{' '}
                <Link href="/login" className="signup-link">Log In</Link>
              </p>
              <form onSubmit={handleSignup}>
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
                <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
                  <FaGoogle className="google-icon" />
                  Continue With Google
                </button>
              </form>
            </div>
          ) : (
            <div className="questionnaire-form-container">
              <h2>Additional Information</h2>
              <form onSubmit={handleSubmitQuestionnaire}>
                <input
                  type="text"
                  placeholder="Artist Name"
                  className="login-input"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Whatsapp Number"
                  className="login-input"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Are you independent or are you signed to a Label?"
                  className="login-input"
                  name="signedToLabel"
                  value={formData.signedToLabel}
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  placeholder="Your next Song Distribution?"
                  className="login-input"
                  name="nextSongDistribution"
                  value={formData.nextSongDistribution}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Have you distributed a song before?"
                  className="login-input"
                  name="distributedBefore"
                  value={formData.distributedBefore}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Previous Works on Spotify"
                  className="login-input"
                  name="spotifyLink"
                  value={formData.spotifyLink}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Previous Works on Youtube"
                  className="login-input"
                  name="youtubeLink"
                  value={formData.youtubeLink}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Link of your Instagram Handle"
                  className="login-input"
                  name="instagramHandle"
                  value={formData.instagramHandle}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="How much are you currently paying for the whole scene?"
                  className="login-input"
                  name="currentCost"
                  value={formData.currentCost}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="What is the plan that you're currently aligned with?"
                  className="login-input"
                  name="currentPlan"
                  value={formData.currentPlan}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Were there any issues faced in the past?"
                  className="login-input"
                  name="issuesFaced"
                  value={formData.issuesFaced}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="How many songs are yet to come?"
                  className="login-input"
                  name="upcomingSongs"
                  value={formData.upcomingSongs}
                  onChange={handleChange}
                  required
                />
                <textarea
                  placeholder="Any extra feedback that you want to provide us."
                  className="login-input"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="login-button">Submit</button>
              </form>
            </div>
          )
        )}
      </div>
    </div>
  );
}
