import Image from 'next/image';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white font-[Poppins]">
      <div className="flex flex-col items-center justify-center pt-20 md:pt-10 px-4">
        {/* Logo */}
        <div className="absolute top-5 left-5">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[130px] md:h-[130px]" // Responsive logo size
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center mt-10">
          <Image
            src="/images/presave-cover.png"
            alt="Ekmarta Chitrapat"
            width={220}
            height={220}
            className="rounded-md"
          />

          <h1 className="text-lg font-semibold mt-4">Ekmatra Chitrapat</h1>
          <p className="text-[#757575]">Parakram Music</p>

          {/* Buttons */}
          <div className="mt-8 space-y-4 w-full">
            <Button icon={<FaSpotify />} text="Pre-Save on Spotify" />
            <Button icon={<FaApple />} text="Pre-Save on Apple Music" />
            <Button icon={<FaYoutube />} text="Pre-Save on Youtube Music" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Button Component
function Button({ icon, text }) {
  return (
    <button className="flex items-center justify-center space-x-2 w-full md:w-[490px] py-3 bg-[#191919] border border-[#757575] rounded-full text-white">
      {icon}
      <span>{text}</span>
    </button>
  );
}
