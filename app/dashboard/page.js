// test code
'use client';

import { 
  FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, 
  FaBolt, FaBell, FaArrowRight, FaYoutube, FaSpotify, 
  FaInstagram, FaApple, FaMoon, FaSun 
} from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  const data = {
    labels: ['May 7', 'May 14', 'May 21', 'May 28'],
    datasets: [
      {
        label: 'Streams',
        data: [1000, 2000, 3500, 2500],
        backgroundColor: darkMode ? 'rgba(75,192,192,0.4)' : 'rgba(192,75,75,0.4)',
        borderColor: darkMode ? 'rgba(75,192,192,1)' : 'rgba(192,75,75,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} font-poppins overflow-auto`}>
      {/* Sidebar */}
      <div className={`sidebar ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} h-[960px] w-[330px] flex flex-col justify-between p-4 rounded-r-3xl`}>
        <div>
          {/* Profile Section */}
          <div className={`rounded-lg p-4 mb-4 ${darkMode ? 'bg-black bg-opacity-77' : 'bg-white bg-opacity-90'}`}>
            <div className="flex items-center">
              <Image src="/images/avtaar.png" height={50} width={50} alt="Profile" />
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center">
                  <div className="w-3/4 bg-gray-400 rounded-full h-1 mt-2">
                    <div className={`h-1 rounded-full ${darkMode ? 'bg-white' : 'bg-black'}`} style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-xs text-gray-600 ml-2">20%</span>
                </div>
                <Link href="/dashboard/question1">
                  <p className={`text-xs mt-2 py-1 text-center border rounded-lg leading-none ${darkMode ? 'border-white text-white' : 'border-black text-black'}`} style={{ fontSize: '10px' }}>
                    Complete your profile
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="logo mb-0 flex justify-center">
            <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={180} width={180} />
          </div>

          {/* Menu */}
          <nav className="mt-0">
            <ul className="space-y-2 text-left">
              <li className={`p-3 flex items-center justify-start transition-all ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ marginRight: '-16px', width: 'calc(100% + 16px)', borderRadius: '25px 0px 0px 25px' }}>
                <FaMusic className="text-xl ml-5" />
                <Link href="#"><span className="text-xl ml-2">Music</span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start transition-all hover:bg-black hover:text-white">
                <FaUsers className="text-xl ml-5" /> <Link href="/dashboard/audience"><span className="text-xl ml-2">Audience</span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start transition-all hover:bg-black hover:text-white">
                <FaTshirt className="text-xl ml-5" /> <Link href=" "><span className="text-xl ml-2">Merch</span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start transition-all hover:bg-black hover:text-white">
                <FaVideo className="text-xl ml-5" /> <Link href=" "><span className="text-xl ml-2">Video & Visuals</span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start transition-all hover:bg-black hover:text-white">
                <FaCog className="text-xl ml-5" /> <Link href="/dashboard/settings"><span className="text-xl ml-2">Settings</span></Link>
              </li>
            </ul>
          </nav>

          <div className="mt-7">
            <Link href="/login">
              <button className="w-full py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all">
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Header */}
        <header className={`py-4 px-8 flex justify-end items-center space-x-6 border-b ${darkMode ? 'border-white' : 'border-black'}`}>
          <div className="relative">
            <FaBell className="cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
          </div>
          <button onClick={toggleMode} className="p-2 rounded-full">
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
          </button>
          <a href="/profile">
            <Image src="/images/avtaar.png" className="w-10 h-10 rounded-full" height={20} width={20} />
          </a>
        </header>

        {/* Main Dashboard Content */}
        <div className="p-8 h-full">
          <div className="bg-[#191919] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Releases</h2>
            <p className="text-gray-500">No recent releases available</p>
          </div>

          <div className="bg-[#CDCDCD] rounded-xl p-6 mb-8 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Release today!</h3>
              <p className="text-gray-400">Submit your release today...</p>
            </div>
            <Link href='/dashboard/rel-quest'>
              <button className="py-2 px-4 rounded-lg flex items-center">Create New Release <FaArrowRight className="ml-2" /></button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 bg-[#191919] rounded-lg p-6 relative h-64">
              <h3 className="text-lg font-semibold mb-4">Streams</h3>
              <Line data={data} options={options} />
            </div>
            <div className="bg-[#191919] rounded-lg p-6 h-64">
              <h3 className="text-lg font-semibold mb-4">Analytic platform</h3>
              <p>Your Analytics Will be applied Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// 'use client';

// import {
//   FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, 
//   FaBell, FaArrowRight, FaYoutube, FaSpotify, FaInstagram, FaApple 
// } from 'react-icons/fa';
// import { Line } from 'react-chartjs-2';
// import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// export default function Dashboard() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const getCookie = (name) => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//     return null;
//   };

//   useEffect(() => {
//     const token = getCookie('authToken') || localStorage.getItem('authToken');
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       router.push('/signup');
//     }
//     setLoading(false);
//   }, [router]);

//   const handleLogout = () => {
//     document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//     localStorage.removeItem('authToken');
//     router.push('/signup');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <p className="text-white">Hello! Young CEO...</p>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <h1 className="text-white text-2xl">
//           Access Denied. Please <a href="/signup" className="text-blue-500">sign up</a> to access this page.
//         </h1>
//       </div>
//     );
//   }

//   const data = {
//     labels: ['May 7', 'May 14', 'May 21', 'May 28'],
//     datasets: [
//       {
//         label: 'Streams',
//         data: [1000, 2000, 3500, 2500],
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true },
//     },
//   };

//   return (
//     <div className="flex h-screen bg-black font-poppins overflow-auto">
//       <Sidebar handleLogout={handleLogout} />

//       <div className="w-full">
//         <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white">
//           <div className="relative">
//             <FaBell className="text-gray-400 cursor-pointer" />
//             <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
//           </div>
//           <a href="/profile">
//             <Image src="/images/avtaar.png" className="w-10 h-10 rounded-full" height={20} width={20} alt="Profile" />
//           </a>
//         </header>

//         <div className="main-dashboard bg-black text-white p-8 h-full">
//           <div className="bg-[#191919] rounded-lg p-6 mb-8">
//             <h2 className="text-xl font-semibold mb-4">Recent Releases</h2>
//             <p className="text-gray-500">No recent releases available</p>
//           </div>

//           <div className="bg-[#CDCDCD] rounded-xl p-6 mb-8 flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-semibold text-black">Release today!</h3>
//               <p className="text-gray-400">
//                 Submit your release today and join the multitude of artists already using Young CEO Entertainment.
//               </p>
//             </div>
//             <Link href="/dashboard/rel-quest">
//               <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center">
//                 Create New Release <FaArrowRight className="ml-2" />
//               </button>
//             </Link>
//           </div>

//           <div className="grid grid-cols-3 gap-8">
//             <div className="col-span-2 bg-[#191919] rounded-lg p-6 relative h-64">
//               <h3 className="text-lg font-semibold mb-4">Streams</h3>
//               <div className="absolute top-4 right-4 flex space-x-2">
//                 <FaYoutube className="text-red-500" />
//                 <FaSpotify className="text-green-500" />
//                 <FaInstagram className="text-pink-500" />
//                 <FaApple className="text-gray-500" />
//                 <FaArrowRight className="text-white" />
//               </div>
//               <Line data={data} options={options} />
//             </div>

//             <div className="bg-[#191919] rounded-lg p-6 h-64">
//               <h3 className="text-lg font-semibold mb-4">Analytic platform</h3>
//               <div className="w-20 h-20 mx-auto mb-4">
//                 <svg viewBox="0 0 36 36" className="circular-chart">
//                   <path className="circle" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
//                 </svg>
//               </div>
//               <p>Your Analytics Will be applied Here</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Sidebar({ handleLogout }) {
//   return (
//     <div className="sidebar bg-white h-[960px] w-[330px] text-black flex flex-col justify-between p-4 rounded-r-3xl">
//               {/* Sidebar */}
//   <div>
//     {/* Profile Section */}
//     <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-4">
//       <div className="flex items-center">
//         <Image
//           src="/images/avtaar.png"
//           height={50}
//           width={50}
//           alt="Profile"
//         />
//         <div className="ml-4 w-full">
//           <div className="flex justify-between items-center">
//             <div className="w-3/4 bg-gray-400 rounded-full h-1 mt-2">
//               <div className="bg-white h-1 rounded-full" style={{ width: '20%' }}></div>
//             </div>
//             <span className="text-xs text-gray-600 ml-2">20%</span>
//           </div>
//           <Link href="/dashboard/question1">
//             <p className="text-xs mt-2 py-1 text-center border border-white rounded-lg text-white leading-none" style={{ fontSize: '10px' }}>
//               Complete your profile
//             </p>
//           </Link>
//         </div>
//       </div>
//     </div>

//     {/* Logo */}
//     <div className="logo mb-0 flex justify-center"> 
//       <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={180} width={180} />
//     </div>

//     {/* Menu */}
//     <nav className="mt-0">
//       <ul className="space-y-2 text-left">
//       <li className="p-3 bg-black text-white flex items-center justify-start hover:text-white transition-all"
//           style={{ marginRight: '-16px', width: 'calc(100% + 16px)', borderRadius: '25px 0px 0px 25px' }}>
//          <FaMusic className="text-xl ml-5" />
//           <Link href="#"> <span className="text-xl ml-2">Music</span> </Link>
        
//         </li>
        
//         <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//           <FaUsers className="text-xl ml-5" /> <Link href="/dashboard/audience"> <span className="text-xl ml-2"> Audience </span> </Link>
//         </li>
//         <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//           <FaTshirt className="text-xl ml-5" /> <Link href=" "> <span className="text-xl ml-2">Merch</span> </Link>
//         </li>
//         <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//           <FaVideo className="text-xl ml-5" /> <Link href=" "><span className="text-xl ml-2"> Video & Visuals </span> </Link> 
//         </li>
        
//         <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//           <FaCog className="text-xl ml-5" /> <Link href="/dashboard/settings"> <span className="text-xl ml-2"> Settings </span> </Link>
//         </li>
//       </ul>
//     </nav>

//     {/* Logout */}
//     <div className="mt-7">
//       <Link href="/login">
//       <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-all">
//         <FaSignOutAlt className="mr-2" /> Logout
//       </button>
//       </Link>
//     </div>
//   </div>
// </div>
//   );
// }
