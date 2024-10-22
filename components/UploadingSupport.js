'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight,FaCloudUploadAlt } from 'react-icons/fa';

const SupportPage = () => {
  // State to manage search input and filtered FAQs
  const [searchTerm, setSearchTerm] = useState('');

  // Filter FAQ items based on the search term
  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      
      {/* Hero Section with Wave */}
      <div className="hero-section relative">
        <div className="container mx-auto text-center pt-24">
          <h1 className="text-4xl font-semibold mb-8 text-left ml-5">How Can we help?</h1>

          {/* Search Bar */}
          <div className="relative search-container mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)} // Update the search term on input change
              className="search-input placeholder-opacity-30 text-white pl-12 py-3 border border-white rounded-lg w-full focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white search-icon" />
          </div>
        </div>

        {/* Wave Shape */}
        <div className="wave-shape"></div>
      </div>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-4">
        <a href="/support" className="back-link text-white text-lg opacity-50"> {/* Reduced opacity */}
          &lt; Back
        </a>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className="faq-header flex items-center justify-between mb-6">
          <div className="flex flex-col">
            {/* Icon */}
            <FaCloudUploadAlt className="text-4xl mb-4 opacity-30"/> {/* Added icon above FAQ */}
            <h2 className="text-2xl font-semibold">Uploading Music</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
          </div>
        </div>
        <p className="text-sm opacity-75 mb-6">Advice on using our release builder.</p>
        <p className="text-sm opacity-50 mb-12">{filteredFaqItems.length} Articles</p>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFaqItems.length > 0 ? (
            filteredFaqItems.map((item, index) => (
              <div key={index} className="faq-item flex justify-between items-center py-4 border-b border-gray-700">
                <p>{item.question}</p>
                <FaChevronRight />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No articles found</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Example FAQ items
const faqItems = [
  { question: 'What is Young Ceo Entertainment' },
  { question: 'How much does music distribution cost with Young CEO Entertainment ?' },
  { question: 'Can I release music for multiple artists from one account ?' },
  { question: 'Who owns the rights to my music when I distribute with YCE ?' },
  { question: 'What does (In Review), (Scheduled) and (Sent To Stores) mean on my releases ?' },
  { question: 'Can I release music in specific countries ?' },
  { question: 'Can I view my music analytics in more detail ?' },
  { question: 'How does Pre-Release work ?' },
  { question: 'Can I edit or remove my release after its been sent to stores?' },
  { question: 'What is Pre-Order Instant Gratification ?' },
  { question: 'Can I set the price of my music ?' },
  { question: 'Can I release someone elses music from my account ?' },
  { question: 'Can I choose where my music is released ?' },
  { question: 'How many tracks are on a single, EP and album ?' },
  { question: 'When will my YCE Merch arrive ?' },
  { question: 'Does YCE Music offer a free trial?' },
];

export default SupportPage;
