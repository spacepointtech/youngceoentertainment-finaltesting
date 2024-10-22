
// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import '@/app/style.css';
// import { useRouter } from 'next/navigation';


// const SubscriptionPage = () => {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [labelArtists, setLabelArtists] = useState(5);
//   const [labelPrice, setLabelPrice] = useState(4899);

//   useEffect(() => {
//     // Check for the authentication token in cookies
//     const token = document.cookie
//       .split('; ')
//       .find(row => row.startsWith('authToken'))
//       ?.split('=')[1];

//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       // If no token, redirect to signup
//       router.push('/signup');
//     }
//     setLoading(false); // Set loading to false after the check
//   }, [router]);

//   const handleArtistSlider = (e) => {
//     const sliderValue = parseInt(e.target.value);
//     let adjustedArtists;
//     if (sliderValue <= 20) {
//       adjustedArtists = Math.floor(sliderValue / 5) * 5; 
//     } else {
//       adjustedArtists = Math.floor((sliderValue - 20) / 10) * 10 + 20; 
//     }

//     setLabelArtists(adjustedArtists);

//     const priceMap = {
//       5: 4899,
//       10: 8199,
//       15: 10299,
//       20: 12899,
//       30: 15699,
//       40: 18199,
//     };

//     setLabelPrice(priceMap[adjustedArtists]);
//   };

//   const handleLogout = () => {
//     document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//     router.push('/signup');
//   };

//   // Show loading state or access denied message based on the authentication state
//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen bg-black"><p className="text-white">Loading...</p></div>;
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <h1 className="text-white text-2xl">Access Denied. Please <a href="/signup" className="text-blue-500">sign up</a> to access this page.</h1>
//       </div>
//     );
//   }
  
  

//   return (
//     <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
//       <Image 
//         src="/images/logo.png" 
//         alt="Young CEO Entertainment" 
//         width={100} 
//         height={100}
//         onClick={handleLogout}
//         className="cursor-pointer"
//       />
//       <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
//         <Image
//           src="/images/subsback.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="top"
//           className="opacity-90"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center">
//         <div className="text-white mt-6 space-y-6">
//           <div className="flex space-x-6">
//             {/* Independent Artist Plan Box */}
//             <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
//               <div>
//                 <h2 className="text-xl font-bold">Independent Artist</h2>
//                 <p className="text-4xl font-semibold mt-5">₹ 1001 / Year</p>
//                 <p className="text-sm text-opacity-5 mt-5">₹ 83.41 / Month</p>
//                 <p className="text-sm text-opacity-50 mt-8">(This plan is only available on an annual subscription basis)</p>
//                 <hr className="my-4 border-t border-gray-500 opacity-50" />
//                 <div className="space-y-2">
//                   <p>Upload Unlimited Songs and Lyrics</p>
//                   <p>Spotify Verification</p>
//                   <p>Create royalty splits</p>
//                   <p>Access to 21 free tools</p>
//                   <p>IPhone app Access</p>
//                   <p>Synced Lyrics in Apple Music</p>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button className="bg-white text-black py-2 px-6 rounded-full">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Independent Duo Plan Box */}
//             <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
//               <div>
//                 <h2 className="text-xl font-bold">Independent Duo</h2>
//                 <p className="text-4xl font-semibold mt-5">₹ 2001 / Year</p>
//                 <p className="text-sm text-opacity-5 mt-5">₹ 166.75 / Month</p>
//                 <p className="text-sm text-opacity-5 mt-8">(This plan is only available on an annual subscription basis)</p>
//                 <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />
//                 <div className="space-y-2">
//                   <p>Upload Unlimited Songs and Lyrics</p>
//                   <p>Spotify Verification</p>
//                   <p>Create royalty splits</p>
//                   <p>Access to 21 free tools</p>
//                   <p>IPhone app Access</p>
//                   <p>Synced Lyrics in Apple Music</p>
//                   <p>Daily Streaming Stats</p>
//                   <p>Customized Label Name</p>
//                   <p>Release date and iTunes pricing</p>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button className="bg-white text-black py-2 px-6 rounded-full">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Label Plan Box with Slider */}
//             <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
//               <h2 className="text-xl font-bold">Independent Label Plan</h2>
//               <p className="text-4xl font-semibold mt-1">₹ {labelPrice} / Year</p>
//               <p className="text-sm text-opacity-50 mt-5">₹ {(labelPrice / 12).toFixed(2)} / Month</p>
//               <div className="flex justify-between items-center mt-1">
//                 <span>{labelArtists}</span>
//                 <input
//                   type="range"
//                   min="5"
//                   max="40"
//                   step="1"
//                   value={labelArtists}
//                   onChange={handleArtistSlider}
//                   className="slider w-[275px]"
//                   style={{ 
//                     WebkitAppearance: 'none', 
//                     appearance: 'none', 
//                     backgroundColor: 'white', 
//                     height: '8px', 
//                     borderRadius: '5px' 
//                   }}
//                 />
//               </div>

//               <p className="text-sm text-opacity-50 mt-3">(This plan is available on an annual subscription basis)</p>
//               <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />

//               <div className="space-y-2 mt-1">
//                 <p>Upload Unlimited Songs and Lyrics</p>
//                 <p>Spotify Verification</p>
//                 <p>Create royalty splits</p>
//                 <p>Access to 21 free tools</p>
//                 <p>IPhone app Access</p>
//                 <p>Synced Lyrics in Apple Music</p>
//                 <p>Daily Streaming Stats</p>
//                 <p>Customized Label Name</p>
//                 <p>Release date and iTunes pricing</p>
//                 <p>1TB File Sharing</p>
//                 <p>RIAA Gold & Platinum Monitoring</p>
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button className="bg-white text-black py-2 px-6 rounded-full"
//                  onClick={() => handlePayment(labelPrice, 'Independent Label')}>
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Single Track Plan Box */}
//           <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10  w-full text-left">
//             <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm mt-10">Upload one song to major platforms for just ₹399</p>
//                 <p className="text-xs text-opacity-10 mt-3">(Note: This plan does not include access to the dashboard)</p>
//               </div>
//               <button className="bg-white text-black py-2 px-4 rounded-full">
//                 Pay ₹399 Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPage;

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/app/style.css';
import { useRouter } from 'next/navigation';

const SubscriptionPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [labelArtists, setLabelArtists] = useState(5);
  const [labelPrice, setLabelPrice] = useState(4899);

  // Helper function to get cookie value by name
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    // Check if the token exists in cookies or localStorage
    const token = getCookie('authToken') || localStorage.getItem('authToken');

    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push('/signup'); // Redirect to signup if no token
    }

    setLoading(false); // Set loading to false after checking
  }, [router]);

  const handleArtistSlider = (e) => {
    const sliderValue = parseInt(e.target.value);
    let adjustedArtists;
    if (sliderValue <= 20) {
      adjustedArtists = Math.floor(sliderValue / 5) * 5;
    } else {
      adjustedArtists = Math.floor((sliderValue - 20) / 10) * 10 + 20;
    }

    setLabelArtists(adjustedArtists);

    const priceMap = {
      5: 4899,
      10: 8199,
      15: 10299,
      20: 12899,
      30: 15699,
      40: 18199,
    };

    setLabelPrice(priceMap[adjustedArtists]);
  };

  const handleLogout = () => {
    // Remove the auth token from both cookies and localStorage
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('authToken');
    router.push('/signup');
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-black"><p className="text-white">Hello! Young Ceo...</p></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h1 className="text-white text-2xl">Access Denied. Please <a href="/signup" className="text-blue-500">sign up</a> to access this page.</h1>
      </div>
    );
  }
  

  return (
    <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
      <Image 
        src="/images/logo.png" 
        alt="Young CEO Entertainment" 
        width={100} 
        height={100}
        onClick={handleLogout}
        className="cursor-pointer"
      />
      <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
        <Image
          src="/images/subsback.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-white mt-6 space-y-6">
          <div className="flex space-x-6">
            {/* Independent Artist Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
              <div>
                <h2 className="text-xl font-bold">Independent Artist</h2>
                <p className="text-4xl font-semibold mt-5">₹ 1001 / Year</p>
                <p className="text-sm text-opacity-5 mt-5">₹ 83.41 / Month</p>
                <p className="text-sm text-opacity-50 mt-8">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50" />
                <div className="space-y-2">
                  <p>Upload Unlimited Songs and Lyrics</p>
                  <p>Spotify Verification</p>
                  <p>Create royalty splits</p>
                  <p>Access to 21 free tools</p>
                  <p>IPhone app Access</p>
                  <p>Synced Lyrics in Apple Music</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white text-black py-2 px-6 rounded-full"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Independent Duo Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
              <div>
                <h2 className="text-xl font-bold">Independent Duo</h2>
                <p className="text-4xl font-semibold mt-5">₹ 2001 / Year</p>
                <p className="text-sm text-opacity-5 mt-5">₹ 166.75 / Month</p>
                <p className="text-sm text-opacity-5 mt-8">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />
                <div className="space-y-2">
                  <p>Upload Unlimited Songs and Lyrics</p>
                  <p>Spotify Verification</p>
                  <p>Create royalty splits</p>
                  <p>Access to 21 free tools</p>
                  <p>IPhone app Access</p>
                  <p>Synced Lyrics in Apple Music</p>
                  <p>Daily Streaming Stats</p>
                  <p>Customized Label Name</p>
                  <p>Release date and iTunes pricing</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white text-black py-2 px-6 rounded-full"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Label Plan Box with Slider */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
              <h2 className="text-xl font-bold">Independent Label Plan</h2>
              <p className="text-4xl font-semibold mt-1">₹ {labelPrice} / Year</p>
              <p className="text-sm text-opacity-50 mt-5">₹ {(labelPrice / 12).toFixed(2)} / Month</p>
              <div className="flex justify-between items-center mt-1">
                <span>{labelArtists}</span>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={labelArtists}
                  onChange={handleArtistSlider}
                  className="slider w-[275px]"
                  style={{ 
                    WebkitAppearance: 'none', 
                    appearance: 'none', 
                    backgroundColor: 'white', 
                    height: '8px', 
                    borderRadius: '5px' 
                  }}
                />
              </div>

              <p className="text-sm text-opacity-50 mt-3">(This plan is available on an annual subscription basis)</p>
              <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />

              <div className="space-y-2 mt-1">
                <p>Upload Unlimited Songs and Lyrics</p>
                <p>Spotify Verification</p>
                <p>Create royalty splits</p>
                <p>Access to 21 free tools</p>
                <p>IPhone app Access</p>
                <p>Synced Lyrics in Apple Music</p>
                <p>Daily Streaming Stats</p>
                <p>Customized Label Name</p>
                <p>Release date and iTunes pricing</p>
                <p>1TB File Sharing</p>
                <p>RIAA Gold & Platinum Monitoring</p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white text-black py-2 px-6 rounded-full"
                 >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Single Track Plan Box */}
          <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10  w-full text-left">
            <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm mt-10">Upload one song to major platforms for just ₹399</p>
                <p className="text-xs text-opacity-10 mt-3">(Note: This plan does not include access to the dashboard)</p>
              </div>
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Pay ₹399 Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
