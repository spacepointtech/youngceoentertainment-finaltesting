'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaPlus, FaMinus, FaArrowLeft, FaAngleLeft, FaUpload, FaCloudUploadAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';

export default function CreateRelease() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
   
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [license, setLicense] = useState('');
  const [showIndependentTooltip, setShowIndependentTooltip] = useState(false);
  const [showCreativeTooltip, setShowCreativeTooltip] = useState(false);
  const [ccType, setCcType] = useState(''); // New state for CC dropdown
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
    
 


  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  
  const handleLicenseChange = (e) => {
    setLicense(e.target.value);
    if (e.target.value !== 'Creative Commons') {
      setCcType(''); // Reset CC type if not Creative Commons
    }
  };

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
      <li className="p-3 bg-black text-white flex items-center justify-start hover:text-white transition-all"
          style={{ marginRight: '-16px', width: 'calc(100% + 16px)', borderRadius: '25px 0px 0px 25px' }}>
         <FaMusic className="text-xl ml-5" />
          <Link href="#"> <span className="text-xl ml-2">Music</span> </Link>
        
        </li>
        
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaUsers className="text-xl ml-5" /> <Link href="/dashboard/audience"> <span className="text-xl ml-2"> Audience </span> </Link>
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
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-14">
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

        {/* Main Body */}
        <div className="w-full max-w-3xl p-8">
            {/* Greetings Box */}
          <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible">
            <div>
          
              <p className="mt-2 opacity-75">--- Song Details Box --- </p>
            </div>
           
          </div>
          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>
 
          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg relative">
            {/* Back Button */}
            <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={() => window.history.back()}
            />
            <p className="text-white text-xl text-center mb-4 mt-2">Providing License Details</p>
            {/* Progress Bar */}
            <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
              <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>

            <div className="relative z-10 w-full">
                        {/* Form Fields */}
        <div className="space-y-4">
          {/* Digital Release Date and Time */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-white block mb-2">Digital Release Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="w-1/2 relative">
              <label className="text-white block mb-2">Release Time<span className="text-red-500">*</span></label>
              <input
                type="time"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                onChange={handleTimeChange}
                required
              />
             
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            Set your digital release date. We recommend at least 7 days in advance to account for processing time.
          </p>
          {selectedDate && selectedTime && (
            <p className="text-white mt-2">
              Release Date: {selectedDate}, Time: {selectedTime}
            </p>
          )}
                 {/* License Type */}
                 <div className="mt-4">
                  <p className="text-white block mb-2">Select the License Type<span className="text-red-500">*</span></p>
                  <div className="border rounded-lg flex items-center justify-center p-2">
                    <div
                      className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${license === 'Copyright' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                      onMouseEnter={() => setShowIndependentTooltip(true)}
                      onMouseLeave={() => setShowIndependentTooltip(false)}
                    >
                      <input
                        type="radio"
                        value="Copyright"
                        className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                        checked={license === 'Copyright'}
                        onChange={handleLicenseChange}
                      />
                      <label htmlFor="independent">Copyright</label>
                      {showIndependentTooltip && !license && (
                        <div className="absolute left-0 mt-28 bg-gray-700 text-white text-xs p-2 rounded-md z-10">
                          Copyright (or author's right) is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings.
                        </div>
                      )}
                    </div>
                    
                    <div
                      className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${license === 'Creative Commons' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                      onMouseEnter={() => setShowCreativeTooltip(true)}
                      onMouseLeave={() => setShowCreativeTooltip(false)}
                    >
                      <input
                        type="radio"
                        value="Creative Commons"
                        className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                        onChange={handleLicenseChange}
                        checked={license === 'Creative Commons'} 
                      />
                      <label htmlFor="label">Creative Commons</label>
                      {showCreativeTooltip && !license && (
                        <div className="absolute right-0 mt-28 bg-gray-700 text-white text-xs p-2 rounded-md z-10">
                          A Creative Commons license is a standard way for a copyright holder to grant others permission to use their work under certain conditions.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs">
                    Select the applicable license: Copyright or Creative Commons (choose the CC type)
                  </p>

                  {/* Creative Commons Type Dropdown */}
                  {license === 'Creative Commons' && (
                    <div className="mt-4">
                      <label className="text-white block mb-2">Select Creative Commons Type</label>
                      <select
                        className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                        value={ccType}
                        onChange={(e) => setCcType(e.target.value)}
                      >
                        <option value="">Choose CC Type</option>
                        <option value="Attribution">Attribution (CC BY)</option>
                        <option value="Attribution-ShareAlike">Attribution-ShareAlike (CC BY-SA)</option>
                        <option value="Attribution-NoDerivs">Attribution-NoDerivs (CC BY-ND)</option>
                        <option value="Attribution-NonCommercial">Attribution-NonCommercial (CC BY-NC)</option>
                        <option value="Attribution-NonCommercial-ShareAlike">Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</option>
                        <option value="Attribution-NonCommercial-NoDerivs">Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)</option>
                      </select>
                    </div>
                  )}
                </div>

            

          {/* Territories and Price Category */}
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label className="text-white block mb-2">Territories (Optional)</label>
              <select className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10">
                <option>Entire World</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
                <option>Oceania</option>
              </select>
              <FaChevronDown className="absolute top-3/4 right-4  transform -translate-y-1/2 text-black" />
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Price Category</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                placeholder="Enter Price Category"
              />
            </div>
          </div>
        </div>

                {/* Submit and Cancel Buttons */}
              <div className="mt-16 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>

                <Link href='/dashboard/upload-quest'>
                  <button className="bg-white text-black py-2 px-4 rounded">Next</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
