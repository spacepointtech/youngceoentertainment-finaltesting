
// import '@/app/style.css';

// export default function UpgradePlan() {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-[#191919] text-white p-6 font-poppins">
//       {/* Heading */}
//       <div className="w-full max-w-4xl text-left mb-6">
//         <h1 className="text-3xl font-semibold mb-1">Upgrade Your Plan</h1>
//         <p className="text-gray-400">
//           Get access to premium features by upgrading your current plan.
//         </p>
//       </div>

//       {/* Plan Info */}
//       <div className="p-6 rounded-md mb-8 w-full max-w-4xl bg-gradient-to-b from-white to-[#0F0F0F] bg-200 bg-center">
//         <p className="text-lg font-medium mb-1 text-[#121212]">
//           You are currently on the <span className="font-semibold">Artist Plan</span>.
//         </p>
//         <p className="text-opacity-50 text-[#121212]">To unlock all premium features, you need to pay</p>
//         <p className="text-2xl font-semibold mt-4 text-[#121212]">₹1899/Year</p>
//       </div>

//       {/* Main Content Box */}
//       <div className="p-8 rounded-lg max-w-4xl w-full border border-[#EBEBEB] bg-transparent">
//         {/* Features */}
//         <div className="space-y-6">
//           {/* Feature 1 */}
//           <div className="pt-1">
//             <div className="flex items-center">
//               <p className="font-medium">Social Media Royalties</p>
//               <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-[#7A6802] text-white">
//                 Premium ★
//               </span>
//             </div>
//             <ul className="text-gray-300 mt-2 space-y-1 text-sm list-disc list-inside">
//               <li>Automatically collect royalties from Instagram, TikTok, and YouTube Shorts.</li>
//               <li>Get detailed reports of your earnings from streams and shares.</li>
//               <li>Stay up to date with real-time social media revenue insights.</li>
//             </ul>
//           </div>

//           {/* Feature 2 */}
//           <div className="border-t border-gray-700 pt-4">
//             <div className="flex items-center">
//               <p className="font-medium">Lyrics Timestamping & Syncing</p>
//               <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-[#7A6802] text-white">
//                 Premium ★
//               </span>
//             </div>
//             <ul className="text-gray-300 mt-2 space-y-1 text-sm list-disc list-inside">
//               <li>Sync lyrics with your music for Spotify and Apple Music.</li>
//               <li>Enable real-time lyrics display for listeners.</li>
//               <li>Boost fan engagement with interactive lyric syncing.</li>
//             </ul>
//           </div>

//           {/* Feature 3 */}
//           <div className="border-t border-gray-700 pt-4">
//             <div className="flex items-center">
//               <p className="font-medium">Advanced Dashboard</p>
//               <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-[#7A6802] text-white">
//                 Premium ★
//               </span>
//             </div>
//             <ul className="text-gray-300 mt-2 space-y-1 text-sm list-disc list-inside">
//               <li>Unlock analytics to monitor your music's performance.</li>
//               <li>Access insights on fan demographics and trends.</li>
//               <li>Manage releases and track royalties with custom tools.</li>
//             </ul>
//           </div>
//         </div>

//          {/* Buttons */}
//         <div className="flex items-center justify-between mt-8">
//            <button className="bg-gray-700 text-gray-300 py-2 px-20 rounded-md">Cancel</button>
//            <button className="bg-white text-black py-2 px-[266px] rounded-md">Pay Now</button>
//        </div>

//         <p className="mt-4 text-xs text-gray-500">
//           By providing your card information, you allow us to charge your card for future payments in accordance with our terms.
//         </p>
//       </div>
//     </div>
//   );
// }


import '@/app/style.css';
import Image from 'next/image'; // Import Next.js Image component

export default function UpgradePlan() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#191919] text-white p-6 font-poppins">
      {/* Heading */}
      <div className="w-full max-w-4xl text-left mb-6">
        <h1 className="text-4xl font-semibold mb-1">Upgrade Your Plan</h1>
        <p className="text-gray-400">
          Get access to premium features by upgrading your current plan.
        </p>
      </div>

      {/* Grid Container for Plan Info and Features */}
      <div className="w-full max-w-4xl grid grid-cols-1 gap-6">
        {/* Plan Info Box */}
        <div
          className="p-6 rounded-lg border border-[#444]"
          style={{
            background: 'linear-gradient(180deg, #333333 55%, #0F0F0F 100%)',
          }}
        >
          <p className="text-lg font-medium mb-1">
            You are currently on the <span className="font-semibold">Artist Plan</span>.
          </p>
          <p className="text-white/70">To unlock all premium features, you need to pay</p>
          <p className="text-2xl font-semibold mt-4">₹1899/Year</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444] text-center">
          <div className="flex justify-start mb-2">
            <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
              Premium ★
            </span>
          </div>  
            <h3 className="text-lg font-semibold mb-2 ml-2 text-left">Social Media Royalties</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/bro.png"
                alt="Social Media Royalties"
                width={220}
                height={120}
                className="h-40"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Keep track of your earnings from social platforms like Instagram, TikTok, and YouTube
              Shorts. Stay on top of your revenue with automatic updates.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444] text-center">
          <div className="flex justify-start mb-2">
            <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
              Premium ★
            </span>
          </div>  
            <h3 className="text-lg font-semibold mb-2">Lyrics Timestamping & Syncing</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/control.png"
                alt="Lyrics Timestamping"
                width={200}
                height={100}
                className="h-32"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Perfectly sync your lyrics with your tracks across all platforms, ensuring your
              audience can follow along in real time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444] text-center">
          <div className="flex justify-start mb-2">
            <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
              Premium ★
            </span>
          </div>  
            <h3 className="text-lg font-semibold mb-2">Advanced Dashboard</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/amico.png"
                alt="Advanced Dashboard"
                width={200}
                height={96}
                className="h-40"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Access an upgraded dashboard with detailed insights into your music's performance,
              customized reports, and additional tools to manage your releases.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button className="bg-gray-700 text-gray-300 py-2 px-[90px] rounded-md">Cancel</button>
          <button className="bg-white text-black py-2 px-72 rounded-md">Pay Now</button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          By providing your card information, you allow us to charge your card for future payments
          in accordance with our terms.
        </p>
      </div>
    </div>
  );
}
