'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';


export default function AudienceOverview() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
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
    <div className="flex h-screen bg-black font-poppins overflow-auto">
                {/* Sidebar */}
<div className="sidebar bg-white h-[960px] w-[330px] text-black flex flex-col justify-between p-4 rounded-r-3xl">
  <div>
    {/* Profile Section */}
    <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-4">
      <div className="flex items-center">
        <Image
          src="/images/avtaar.png"
          height={50}
          width={50}
          alt="Profile"
        />
        <div className="ml-4 w-full">
          <div className="flex justify-between items-center">
            <div className="w-3/4 bg-gray-400 rounded-full h-1 mt-2">
              <div className="bg-white h-1 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <span className="text-xs text-gray-600 ml-2">20%</span>
          </div>
          <Link href="/dashboard/question1">
            <p className="text-xs mt-2 py-1 text-center border border-white rounded-lg text-white leading-none" style={{ fontSize: '10px' }}>
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
      <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaMusic className="text-xl ml-5" /> <Link href="/dashboard"> <span className="text-xl ml-2"> Music </span> </Link>
        </li>

      <li className="p-3 bg-black text-white flex items-center justify-start hover:text-white transition-all"
          style={{ marginRight: '-16px', width: 'calc(100% + 16px)', borderRadius: '25px 0px 0px 25px' }}>
         <FaUsers className="text-xl ml-5" />
          <Link href="#"> <span className="text-xl ml-2"> Audience </span> </Link>  
        </li>
      
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaTshirt className="text-xl ml-5" /> <Link href=" "> <span className="text-xl ml-2">Merch</span> </Link>
        </li>
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaVideo className="text-xl ml-5" /> <Link href=" "><span className="text-xl ml-2"> Video & Visuals </span> </Link> 
        </li>
        
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaCog className="text-xl ml-5" /> <Link href="/dashboard/settings"> <span className="text-xl ml-2"> Settings </span> </Link>
        </li>
      </ul>
    </nav>

    {/* Logout */}
    <div className="mt-7">
      <Link href="/login">
      <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-all">
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
      </Link>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-52">
          <div className="relative">
            <FaBell className="text-gray-400 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
          </div>
          <Link href="/profile">
            <Image
              src="/images/avtaar.png"
              className="w-10 h-10 rounded-full"
              height={20}
              width={20}
              alt="Profile"
            />
          </Link>
        </header>

        {/* Section Title */}
       

        {/* Section with Overview Links */}
        <section className="relative mb-8 w-[75%] mt-4">
        <div className="flex justify-start ml-3">
    <h1 className="text-4xl font-bold text-white mb-8">Audience</h1>
               </div>
          {/* Links: Overview, Segments, Location */}
          <div className="flex justify-start items-center mb-8 relative">
        
            <Link href="/dashboard/audience" className="text-white opacity-50 mx-4">
              Overview
            </Link>
            <Link href="/dashboard/audience/segments" className="text-white opacity-50 mx-4">
              Segments
            </Link>
            <Link href="#" className="relative text-white font-bold mx-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-[100%]">
              Location
            </Link>
            {/* Line extending beyond the Overview */}
            <div className="absolute left-[2%] right-0 bottom-[-2px] h-[2px] bg-white opacity-20"></div>
          </div>

          {/* Welcome to Analytics Box */}
          <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-lg relative">
            <h2 className="text-3xl font-bold mb-6 text-white">Welcome to your Analytics</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">LISTENERS</p>
                <p className="text-4xl font-bold text-white opacity-80">112</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">STREAMS</p>
                <p className="text-4xl font-bold text-white opacity-80">342</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">STREAMS / LISTENERS</p>
                <p className="text-4xl font-bold text-white opacity-80">3.5</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">SAVES</p>
                <p className="text-4xl font-bold text-white opacity-80">128</p>
              </div>
            </div>

            {/* Background Image */}
            {/* <div className="absolute top-0 right-0 bottom-12 w-40 h-40 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/audiencelayer.png')" }}></div> */}
          </div>
        </section>

       
        {/* Background Box with Image */}
<section className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg w-[75%] mb-8 relative min-h-[500px]"> 
</section>

    
      </div>
    </div>
  );
}
