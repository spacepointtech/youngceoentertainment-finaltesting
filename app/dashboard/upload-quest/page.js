'use client';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaPlus, FaMinus, FaArrowLeft, FaAngleLeft, FaUpload, FaCloudUploadAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


export default function CreateRelease() {
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
  const [trackFile, setTrackFile] = useState(null);
  const [trackFileName, setTrackFileName] = useState('');
  const [catalogFile, setCatalogFile] = useState(null);
  const [catalogFileName, setCatalogFileName] = useState('');
  const [coverFile, setCoverFile] = useState(null);
  const [coverFileName, setCoverFileName] = useState('');
  const handleFileUpload = (e, setFile, setFileName, allowedTypes) => {
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      setFile(file);
      setFileName(file.name); // Sets the file name
    } else {
      alert('Invalid file type. Please upload a valid file.');
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
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-48">
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
            <p className="text-white text-xl text-center mb-4 mt-2">Upload Your Artistic Data</p>
            {/* Progress Bar */}
            <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
              <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>

            <div className="relative z-10 w-full">
              {/* Add Tracks from Computer */}
              <div className="space-y-4 mb-8">
                <label className="text-white block mb-2 mt-3">Add Tracks from Computer</label>
                <div className="flex justify-between space-x-4">
                  <label className="w-2/3 p-3 flex items-center justify-between border border-white text-black rounded h-12 cursor-pointer relative bg-[#CDCDCD]">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => handleFileUpload(e, setTrackFile, setTrackFileName, ['audio/wav'])}
                    />
                    <span>{trackFileName || 'Upload From Computer'}</span>  
                    <FaCloudUploadAlt className="text-3xl" />
                  </label>
                </div>
                <p className="text-xs text-white opacity-75 mt-2">The tracks will be uploaded from your computer.</p>

              </div>
               
                {/* Add from Catalog */}
              <div className="space-y-4 mb-8">
                <label className="text-white block mb-2">Add from Catalog</label>
                <div className="flex justify-between space-x-4">
                  <label className="w-2/3 p-3 flex items-center justify-between border border-white text-black rounded h-12 cursor-pointer relative bg-[#CDCDCD]">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => handleFileUpload(e, setCatalogFile, setCatalogFileName, ['audio/wav'])}
                    />
                    <span>{catalogFileName || 'Upload from Catalog'}</span> 
                    <FaCloudUploadAlt className="text-3xl" />
                  </label>
                </div>
                <p className="text-xs text-white opacity-75 mt-2">The tracks will be uploaded from your catalog.</p>
              </div>


                {/* Upload Cover Photo */}
<div className="flex space-x-6">
  <div className="w-1/2">
    <label className="text-white block mb-2">Upload Cover Photo</label>

    {/* Upload Box */}
    <label className="w-full p-3 flex flex-col items-center justify-center border-2 border-white border-dashed text-white rounded h-44 cursor-pointer relative">
      <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={(e) => handleFileUpload(e, setCoverFile, setCoverFileName, ['image/png', 'image/jpeg', 'image/jpg'])}
      />
      <div className="flex flex-col items-center">
        <FaCloudUploadAlt className="text-4xl mb-2" />
        <span>{coverFileName || 'Drag and Drop your cover art'}</span>
      </div>
    </label>
  </div>

  <div className="w-1/2 text-xs text-gray-400 opacity-70 mt-10">
    <h5 className="text-xs text-white mb-2 font-semibold">Cover Art Requirement:</h5>
    <p className="text-xs text-gray-400 mb-4">Size: 300X300PX</p>
    <p className="text-xs text-gray-400 mb-4">Format: JPG, JPEG or PNG</p>
    <p>Ensure you own the rights to all artwork elements. Information must match release metadata. Stores reject blurry, low-quality images or those with URLs, contact info, barcodes, prices, or logos. No explicit content. Non-compliant artwork will be rejected.</p>
  </div>
</div>

                      {/* <div>
                           Will integrate this to add Permission of Remixes 
                      </div> */}

              {/* Submit and Cancel Buttons */}
              <div className="mt-6 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>

                <Link href='/dashboard/submission'>
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


