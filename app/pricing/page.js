// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import '@/app/style.css';
// import { useRouter } from 'next/navigation';

// // Reusable Button Component
// const Button = ({ text, onClick }) => {
//   return (
//     <button
//       className="bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200 transition-all duration-300"
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// const Pricing = () => {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [labelArtists, setLabelArtists] = useState(5);
//   const [labelPrice, setLabelPrice] = useState(4899);

//   const handleArtistSlider = (e) => {
//     const sliderValue = parseInt(e.target.value);
//     let adjustedArtists;
//     if (sliderValue <= 20) {
//       adjustedArtists = Math.floor(sliderValue / 5) * 5;
//     } else {
//       adjustedArtists = Math.floor((sliderValue - 20) / 10) * 10 + 20;
//     }
//     setLabelArtists(adjustedArtists);

//     const priceMap = {
//       5: 4899,
//       10: 8199,
//       15: 10299,
//       20: 12899,
//       30: 15699,
//       40: 18199,
//     };
//     setLabelPrice(priceMap[adjustedArtists]);
//   };

//   return (
//     <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
//       <Image 
//         src="/images/logo.png" 
//         alt="Young CEO Entertainment" 
//         width={100} 
//         height={100}
//         className="cursor-pointer"
//       />
//       <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
//         <Image
//           src="/images/subsback.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="top"
//           className="opacity-90"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="text-white mt-6 space-y-6 w-full max-w-5xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Independent Artist Plan Box */}
//             <PlanBox 
//               title="Independent Artist"
//               price="₹ 1001 / Year"
//               monthlyPrice="₹ 83.41 / Month"
//               description="(This plan is only available on an annual subscription basis)"
//               features={[
//                 "Upload Unlimited Songs and Lyrics",
//                 "Spotify Verification",
//                 "Create royalty splits",
//                 "Access to 21 free tools",
//                 "IPhone app Access",
//                 "Synced Lyrics in Apple Music",
//               ]}
//             />

//             {/* Independent Duo Plan Box */}
//             <PlanBox 
//               title="Independent Duo"
//               price="₹ 2001 / Year"
//               monthlyPrice="₹ 166.75 / Month"
//               description="(This plan is only available on an annual subscription basis)"
//               features={[
//                 "Upload Unlimited Songs and Lyrics",
//                 "Spotify Verification",
//                 "Create royalty splits",
//                 "Access to 21 free tools",
//                 "IPhone app Access",
//                 "Synced Lyrics in Apple Music",
//                 "Daily Streaming Stats",
//                 "Customized Label Name",
//                 "Release date and iTunes pricing",
//               ]}
//             />

//             {/* Label Plan Box with Slider */}
//             <PlanBox 
//               title="Independent Label Plan"
//               price={`₹ ${labelPrice} / Year`}
//               monthlyPrice={`₹ ${(labelPrice / 12).toFixed(2)} / Month`}
//               description="(This plan is available on an annual subscription basis)"
//               slider={{
//                 value: labelArtists,
//                 min: 5,
//                 max: 40,
//                 handleChange: handleArtistSlider,
//               }}
//               features={[
//                 "Upload Unlimited Songs and Lyrics",
//                 "Spotify Verification",
//                 "Create royalty splits",
//                 "Access to 21 free tools",
//                 "IPhone app Access",
//                 "Synced Lyrics in Apple Music",
//                 "Daily Streaming Stats",
//                 "Customized Label Name",
//                 "Release date and iTunes pricing",
//                 "1TB File Sharing",
//                 "RIAA Gold & Platinum Monitoring",
//               ]}
//             />
//           </div>

//           {/* Single Track Plan Box */}
//           <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10 w-full text-left">
//             <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm mt-10">Upload one song to major platforms for just ₹399</p>
//                 <p className="text-xs text-opacity-10 mt-3">(Note: This plan does not include access to the dashboard)</p>
//               </div>
//               <Button text="Get Started" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // PlanBox Component
// const PlanBox = ({ title, price, monthlyPrice, description, features, slider }) => (
//   <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-full">
//     <div>
//       <h2 className="text-xl font-bold">{title}</h2>
//       <p className="text-4xl font-semibold mt-5">{price}</p>
//       {monthlyPrice && <p className="text-sm text-opacity-50 mt-5">{monthlyPrice}</p>}
//       {slider && (
//         <div className="flex justify-between items-center mt-1">
//           <span>{slider.value}</span>
//           <input
//             type="range"
//             min={slider.min}
//             max={slider.max}
//             step="1"
//             value={slider.value}
//             onChange={slider.handleChange}
//             className="slider w-[275px]"
//             style={{
//               WebkitAppearance: 'none',
//               appearance: 'none',
//               backgroundColor: 'white',
//               height: '8px',
//               borderRadius: '5px',
//             }}
//           />
//         </div>
//       )}
//       <p className="text-sm text-opacity-50 mt-8">{description}</p>
//       <hr className="my-4 border-t border-gray-500 opacity-50" />
//       <div className="space-y-2">
//         {features.map((feature, index) => (
//           <p key={index}>{feature}</p>
//         ))}
//       </div>
//     </div>
//     <div className="flex justify-center mt-4">
//       <Button text="Get Started" />
//     </div>
//   </div>
// );

// export default Pricing;


'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/app/style.css';
import { useRouter } from 'next/navigation';

// Reusable Button Component
const Button = ({ text, onClick, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Navigate to the specified href
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200 transition-all duration-300"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const Pricing = () => {
  const router = useRouter();
  const [labelArtists, setLabelArtists] = useState(5);
  const [labelPrice, setLabelPrice] = useState(4899);

  const handleArtistSlider = (e) => {
    const sliderValue = parseInt(e.target.value);
    let adjustedArtists;
    if (sliderValue <= 20) {
      adjustedArtists = Math.floor(sliderValue / 5) * 5;
    } else {
      adjustedArtists = Math.floor((sliderValue - 20) / 10) * 10 + 20;
    }
    setLabelArtists(adjustedArtists);

    const priceMap = {
      5: 4899,
      10: 8199,
      15: 10299,
      20: 12899,
      30: 15699,
      40: 18199,
    };
    setLabelPrice(priceMap[adjustedArtists]);
  };

  return (
    <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
      <Image 
        src="/images/logo.png" 
        alt="Young CEO Entertainment" 
        width={100} 
        height={100}
        className="cursor-pointer"
      />
      <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
        <Image
          src="/images/subsback.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-white mt-6 space-y-6 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Independent Artist Plan Box */}
            <PlanBox 
              title="Independent Artist"
              price="₹ 1001 / Year"
              monthlyPrice="₹ 83.41 / Month"
              description="(This plan is only available on an annual subscription basis)"
              features={[
                "Upload Unlimited Songs and Lyrics",
                "Spotify Verification",
                "Create royalty splits",
                "Access to 21 free tools",
                "IPhone app Access",
                "Synced Lyrics in Apple Music",
              ]}
            />

            {/* Independent Duo Plan Box */}
            <PlanBox 
              title="Independent Duo"
              price="₹ 2001 / Year"
              monthlyPrice="₹ 166.75 / Month"
              description="(This plan is only available on an annual subscription basis)"
              features={[
                "Upload Unlimited Songs and Lyrics",
                "Spotify Verification",
                "Create royalty splits",
                "Access to 21 free tools",
                "IPhone app Access",
                "Synced Lyrics in Apple Music",
                "Daily Streaming Stats",
                "Customized Label Name",
                "Release date and iTunes pricing",
              ]}
            />

            {/* Label Plan Box with Slider */}
            <PlanBox 
              title="Independent Label Plan"
              price={`₹ ${labelPrice} / Year`}
              monthlyPrice={`₹ ${(labelPrice / 12).toFixed(2)} / Month`}
              description="(This plan is available on an annual subscription basis)"
              slider={{
                value: labelArtists,
                min: 5,
                max: 40,
                handleChange: handleArtistSlider,
              }}
              features={[
                "Upload Unlimited Songs and Lyrics",
                "Spotify Verification",
                "Create royalty splits",
                "Access to 21 free tools",
                "IPhone app Access",
                "Synced Lyrics in Apple Music",
                "Daily Streaming Stats",
                "Customized Label Name",
                "Release date and iTunes pricing",
                "1TB File Sharing",
                "RIAA Gold & Platinum Monitoring",
              ]}
            />
          </div>

          {/* Single Track Plan Box */}
          <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10 w-full text-left">
            <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm mt-10">Upload one song to major platforms for just ₹399</p>
                <p className="text-xs text-opacity-10 mt-3">(Note: This plan does not include access to the dashboard)</p>
              </div>
              <Button text="Get Started" href="/signup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PlanBox Component
const PlanBox = ({ title, price, monthlyPrice, description, features, slider }) => (
  <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-full">
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-4xl font-semibold mt-5">{price}</p>
      {monthlyPrice && <p className="text-sm text-opacity-50 mt-5">{monthlyPrice}</p>}
      {slider && (
        <div className="flex justify-between items-center mt-1">
          <span>{slider.value}</span>
          <input
            type="range"
            min={slider.min}
            max={slider.max}
            step="1"
            value={slider.value}
            onChange={slider.handleChange}
            className="slider w-[275px]"
            style={{
              WebkitAppearance: 'none',
              appearance: 'none',
              backgroundColor: 'white',
              height: '8px',
              borderRadius: '5px',
            }}
          />
        </div>
      )}
      <p className="text-sm text-opacity-50 mt-8">{description}</p>
      <hr className="my-4 border-t border-gray-500 opacity-50" />
      <div className="space-y-2">
        {features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <Button text="Get Started" href="/signup" />
    </div>
  </div>
);

export default Pricing;
