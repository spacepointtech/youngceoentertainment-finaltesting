// import '@/app/style.css';

// export default function UpgradePlan() {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-[#191919] text-white p-6 font-poppins">
//       {/* Heading */}
//       <div className="w-full max-w-4xl text-left mb-6">
//         <h1 className="text-3xl font-semibold mb-1">Upgrade Your Plan</h1>
//         <p className="text-gray-400">Get access to premium features by upgrading your current plan.</p>
//       </div>

//       {/* Plan Info */}
//       <div
//         className="p-6 rounded-md mb-8 w-full max-w-4xl"
//         style={{
//           background: `linear-gradient(#FFFFFF 55%, #0F0F0F 100%)`,
//           backgroundSize: '100% 200%',
//           backgroundPosition: 'center',
//         }}
//       >
//         <p className="text-lg font-medium mb-1" style={{ color: "#121212" }}>
//           You are currently on the <span style={{ color: "#121212" }}>Independent Duo Plan</span>.
//         </p>
//         <p className="text-gray-700 opacity-50" style={{ color: "#121212" }}>
//           To unlock all premium features, you need to pay
//         </p>
//         <p className="text-2xl font-semibold mt-4" style={{ color: "#121212" }}>
//           ₹3099/Year
//         </p>
//       </div>

//       {/* Main Content Box */}
//       <div
//         className="p-8 rounded-lg max-w-4xl w-full border"
//         style={{
//           borderColor: "#EBEBEB",
//           backgroundColor: "transparent",
//         }}
//       >
//         {/* Features */}
//         <div className="space-y-6">
//           {/* Feature 1 */}
//           <div className="pt-1">
//             <div className="flex items-center">
//               <p className="font-medium">Social Media Royalties</p>
//               <span
//                 className="px-2 py-1 text-xs rounded-full font-semibold ml-2"
//                 style={{ backgroundColor: "#7A6802", color: "white" }}
//               >
//                 Premium ★
//               </span>
//             </div>
//             <ul className="text-gray-300 mt-2 space-y-1 text-sm list-disc list-inside">
//               <li>Automatically collect royalties from social platforms like Instagram, TikTok, and YouTube Shorts.</li>
//               <li>Get detailed reports of your earnings from streams and shares on these platforms.</li>
//               <li>Stay up to date with real-time insights on your social media revenue.</li>
//             </ul>
//           </div>

//           {/* Feature 2 */}
//           <div className="border-t border-gray-700 pt-4">
//             <div className="flex items-center">
//               <p className="font-medium">Lyrics Timestamping & Syncing</p>
//               <span
//                 className="px-2 py-1 text-xs rounded-full font-semibold ml-2"
//                 style={{ backgroundColor: "#7A6802", color: "white" }}
//               >
//                 Premium ★
//               </span>
//             </div>
//             <ul className="text-gray-300 mt-2 space-y-1 text-sm list-disc list-inside">
//               <li>Sync your song lyrics with your music for platforms like Spotify and Apple Music.</li>
//               <li>Ensure listeners can follow along with real-time lyrics display during playback.</li>
//               <li>Boost fan engagement by providing accurate and interactive lyric syncing.</li>
//             </ul>
//           </div>

//           {/* Feature 3 */}
//           <div className="border-t border-gray-700 pt-4">
//             <div className="flex items-center">
//               <p className="font-medium">Advanced Dashboard</p>
//               <span
//                 className="px-2 py-1 text-xs rounded-full font-semibold ml-2"
//                 style={{ backgroundColor: "#7A6802", color: "white" }}
//               >
//                 Premium ★
//               </span>
//             </div>
//             <ul className="text-gray-300 mt-2 space-y-1 text-sm list-disc list-inside">
//               <li>Unlock a detailed analytics dashboard to monitor your music's performance.</li>
//               <li>Access advanced insights, including fan demographics, geographic reach, and trends.</li>
//               <li>Get custom reports and tools to help you manage your releases and track royalties.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center justify-between mt-8">
//           <button className="bg-gray-700 text-gray-300 py-2 px-20 rounded-md">Cancel</button>
//           <button className="bg-white text-black py-2 px-[266px] rounded-md">Pay Now</button>
//         </div>

//         <p className="mt-4 text-xs text-gray-500">
//           By providing your card information, you allow us to charge your card for future payment in accordance with their terms.
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
        <h1 className="text-3xl md:text-4xl font-semibold mb-1">Upgrade Your Plan</h1>
        <p className="text-gray-400">
          Get access to premium features by upgrading your current plan.
        </p>
      </div>

      {/* Grid Container for Plan Info and Features */}
      <div className="w-full max-w-4xl grid grid-cols-1 gap-6">
        {/* Plan Info Box */}
        <div
          className="p-6 rounded-lg border border-[#444] bg-gradient-to-b from-[#333333] to-[#0F0F0F]"
        >
          <p className="text-lg font-medium mb-1">
            You are currently on the <span className="font-semibold">Independent Duo</span>.
          </p>
          <p className="text-white/70">To unlock all premium features, you need to pay</p>
          <p className="text-2xl font-semibold mt-4">₹3099/Year</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444]">
            <div className="flex justify-start mb-2">
              <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
                Premium ★
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 ml-2">Social Media Royalties</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/bro.png"
                alt="Social Media Royalties"
                width={220}
                height={120}
                className="h-40 object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 tracking-wide text-justify">
              Keep track of your earnings from social platforms like Instagram, TikTok, and YouTube
              Shorts. Stay on top of your revenue with automatic updates.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444]">
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
                className="h-32 object-contain"
              />
            </div>
            <p className="text-sm text-gray-400  text-justify">
              Perfectly sync your lyrics with your tracks across all platforms, ensuring your
              audience can follow along in real time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444]">
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
                className="h-40 object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Access an upgraded dashboard with detailed insights into your music's any of the performance,
              customized our reports, and additional tools to manage your releases.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gray-700 text-gray-300 py-2 px-28 rounded-md w-full sm:w-auto">
            Cancel
          </button>
          <button className="bg-white text-black py-2 px-64 rounded-md w-full sm:w-auto sm:px-64">
            Pay Now
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          By providing your card information, you allow us to charge your card for future payments
          in accordance with our terms.
        </p>
      </div>
    </div>
  );
}
