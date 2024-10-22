'use client'; 
import React from 'react';
import { 
  FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, 
  FaBell, FaArrowRight, FaYoutube, FaSpotify, FaInstagram, 
  FaApple, FaFacebook, FaTwitter, FaAmazon, FaPencilAlt 
} from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css'

export default function Profile() {
 
  return (
    <div className="flex h-screen bg-black font-poppins overflow-auto">
      {/* Sidebar */}
      <div className="sidebar bg-white h-[960px] w-[330px] text-black flex flex-col justify-between p-4 rounded-r-3xl">
        <div>
          {/* Profile Section */}
          <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <Image src="/images/avtaar.png" height={50} width={50} alt="Profile" />
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
                <FaMusic className="text-xl ml-5" />
                <Link href="/dashboard"><span className="text-xl ml-2"> Music </span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
                <FaUsers className="text-xl ml-5" />
                <Link href="/dashboard/audience"><span className="text-xl ml-2"> Audience </span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
                <FaTshirt className="text-xl ml-5" />
                <Link href="#"><span className="text-xl ml-2">Merch</span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
                <FaVideo className="text-xl ml-5" />
                <Link href="#"><span className="text-xl ml-2"> Video & Visuals </span></Link>
              </li>
              <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
                <FaCog className="text-xl ml-5" />
                <Link href="/dashboard/settings"><span className="text-xl ml-2"> Settings </span></Link>
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
      <div className="w-full">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white">
          <div className="relative">
            <FaBell className="text-gray-400 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
          </div>
          <a href="/profile">
            <Image src="/images/avtaar.png" className="w-10 h-10 rounded-full" height={20} width={20} />
          </a>
        </header>

        {/* Main Profile Content */}
        <div className="main-dashboard bg-black text-white p-8 h-full">
          <div className="w-full">
            {/* Profile Header Section */}
            <div className="bg-gradient-to-b from-black to-gray-600 p-6 rounded-lg mb-6">
              <div className="flex items-center">
                <Image src="/images/profile.jpg" className="w-24 h-24 rounded-full" alt="Profile Image" height={100} width={100} />
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Verified Artist</p>
                  <h1 className="text-4xl font-bold text-white">Deepesh Vanjani</h1>
                  <p className="text-lg text-gray-300">1,271 monthly listeners</p>
                </div>
              </div>
            </div>

            {/* Personal Details Section */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-[#1A1A1A] p-6 rounded-lg border border-[#262626]">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl text-white mb-10">Personal Details</h2>
                  <FaPencilAlt className="text-gray-400" />
                </div>
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <p className="text-gray-400">Your Name: </p>
                    <span className="text-white block">Deepesh Vanjani</span>
                  </div>
                  <div>
                    <p className="text-gray-400">Stage Name: </p>
                    <span className="text-white block">DJ SONIC</span>
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-400">Contact: </p>
                    <span className="text-white block">7709574621</span>
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-400">Email: </p>
                    <span className="text-white block">deepesh123@gmail.com</span>
                  </div>
                  <div className="col-span-2 mt-8">
                    <p className="text-gray-400">Joined Date: </p>
                    <span className="text-white">September 10, 2024</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#262626] h-auto">
                <h2 className="text-xl text-white mb-5">Social Media Links</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaInstagram className="text-white" />
                    <p className="ml-2 text-white">Deepesh@123</p>
                  </div>
                  <div className="flex items-center">
                    <FaFacebook className="text-white" />
                    <p className="ml-2 text-white">Deepesh@123</p>
                  </div>
                  <div className="flex items-center">
                    <FaTwitter className="text-white" />
                    <p className="ml-2 text-white">Deepesh@123</p>
                  </div>
                  <div className="flex items-center">
                    <FaYoutube className="text-white" />
                    <p className="ml-2 text-white">Deepesh@123</p>
                  </div>
                </div>
                <button className="bg-black text-gray-400 w-full mt-4 py-2 rounded-lg hover:bg-gray-700 transition">
                  + Add Account
                </button>
              </div>
            </div>
             
                {/* Achievements & Activity */}

            <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 bg-[#1A1A1A] p-6 rounded-lg border border-[#262626]">
            <h2 className="text-xl text-white mb-5">Achievements & Activity</h2>
              </div>

              {/* Music Platforms */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#262626]">
                <h2 className="text-xl text-white mb-5">Music Platforms</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaSpotify className="text-green-500" />
                    <p className="ml-2 text-white">Spotify</p>
                  </div>
                  <div className="flex items-center">
                    <FaApple className="text-white" />
                    <p className="ml-2 text-white">Apple Music</p>
                  </div>
                  <div className="flex items-center">
                    <FaAmazon className="text-yellow-500" />
                    <p className="ml-2 text-white">Amazon Music</p>
                  </div>
                </div>
              </div>
            </div>
                   
                    {/* Track Record */}

            <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 bg-[#1A1A1A] p-6 rounded-lg border border-[#262626]">
            <h2 className="text-xl text-white mb-5"> Track Record </h2>
              </div>
            </div>
            {/* Subscription Details */}
            <div className="mt-6 bg-[#1A1A1A] p-6 rounded-lg border border-[#262626]">
              <h2 className="text-xl text-white mb-5">Subscription Details</h2>
              <p className="text-white">You have an active subscription till <span className="font-bold">December 31, 2024</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
