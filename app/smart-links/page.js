import Image from 'next/image';
import '@/app/style.css';
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from 'react-icons/fa';

export default function MusicLinks() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen flex flex-col items-center text-white font-[Poppins]">
      {/* Logo */}
      <div className="absolute top-5 left-5">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={130}
          height={130}
          className="w-[90px] h-[90px] md:w-[130px] md:h-[130px]" // Adjust logo size for smaller screens
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-20 md:mt-10 px-4"> {/* Adjusted margin-top for smaller screens */}
        <Image
          src="/images/presave-cover.png"
          alt="Ekmarta Chitrapat"
          width={220}
          height={220}
          className="rounded-md w-[160px] h-[160px] md:w-[220px] md:h-[220px]" // Responsive image size
        />
        
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold mt-4">Ekmatra Chitrapat</h1>
        <p className="text-[#757575] text-sm md:text-base">Parakram Music</p>

        {/* Buttons */}
        <div className="bg-[#191919] border border-[#757575] rounded-lg p-6 mt-8 space-y-4 w-full max-w-lg mb-12">
          {/* Spotify */}
          <Button icon={<FaSpotify size={24} />} text="Spotify" />
          {/* Apple Music */}
          <Button icon={<FaApple size={24} />} text="Apple Music" />
          {/* JioSaavn */}
          <Button icon={<Image src="/images/jiosavan.svg" alt="JioSaavn" width={24} height={24} />} text="JioSaavn" />
          {/* Amazon Music */}
          <Button icon={<FaAmazon size={24} />} text="Amazon Music" />
          {/* YouTube Music */}
          <Button icon={<FaYoutube size={24} />} text="YouTube Music" />
        </div>
      </div>
    </div>
  );
}

// Button Component
function Button({ icon, text }) {
  return (
    <div className="flex items-center justify-between w-full md:w-[480px] bg-[#191919] border-b border-[#757575] py-4 md:py-5 px-4 md:px-6">
      <div className="flex items-center space-x-2">
        {icon}
        <span className="text-sm md:text-lg">{text}</span>
      </div>
      <button className="text-xs md:text-sm bg-white text-black px-8 md:px-12 py-2 md:py-3 rounded-md">
        Play
      </button>
    </div>
  );
}
