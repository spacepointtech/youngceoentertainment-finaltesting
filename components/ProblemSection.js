// // ProblemSection.js

// 'use client'; // for client side rendering
// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';

// // Import Font Awesome Icons from react-icons
// import { FaFacebook, FaSpotify, FaApple, FaInstagram, FaYoutube, FaAmazon, FaDeezer, FaSoundcloud, FaTiktok, FaNapster, FaItunes, FaGooglePlay } from 'react-icons/fa';

// export default function ProblemSection() {
//   const [hoveredIcon, setHoveredIcon] = useState(null);
//   const [hoveredModalIcon, setHoveredModalIcon] = useState(null); // Hover state for modal icons
//   const [showModal, setShowModal] = useState(false); // Modal state

//   const icons = [
//     { src: '/images/apple-music.svg', alt: 'Apple Music', message: 'Distribute your music on Apple Music' },
//     { src: '/images/spotify.svg', alt: 'Spotify', message: 'Distribute your music on Spotify' },
//     { src: '/images/music.svg', alt: 'Music', message: 'Distribute your music on Amazon Music' },
//     { src: '/images/shazam.svg', alt: 'Shazam', message: 'Distribute your music on Shazam' },
//     { src: '/images/instagram.svg', alt: 'Instagram', message: 'Distribute your music on Instagram' },
//     { src: '/images/youtube.svg', alt: 'YouTube', message: 'Distribute your music on YouTube' },
//   ];

//   const moreIcons = [
//     { icon: <FaFacebook />, alt: 'Facebook' },
//     { icon: <FaSpotify />, alt: 'Spotify' },
//     { icon: <FaItunes />, alt: 'Apple Music' },
//     { icon: <FaInstagram />, alt: 'Instagram' },
//     { icon: <FaYoutube />, alt: 'YouTube' },
//     { icon: <FaAmazon />, alt: 'Amazon Music' },
//     { icon: <FaDeezer />, alt: 'Deezer' },
//     { icon: <FaSoundcloud/>, alt: 'SoundCloud' },
//     { icon: <FaTiktok/>, alt: 'Tiktok Music'},
//     { icon: <FaNapster/>, alt: 'Napster Music'},
//     { icon: <FaGooglePlay />, alt: 'Google Play'},
//     { icon: <Image src="/images/shazam.svg" alt="Shazam" width={50} height={50} />, alt: 'Shazam'},
//     { icon: <Image src="/images/jiosavan.svg" alt="Shazam" width={50} height={50} />, alt: 'Jio Savan'},
//     { icon: <Image src="/images/tidal.svg" alt="Shazam" width={50} height={50} />, alt: 'Tidal Music'},
//     { icon: <Image src="/images/pandora.svg" alt="Shazam" width={50} height={50} />, alt: 'Pandora Music'},
//     { icon: <Image src="/images/beatport.svg" alt="Shazam" width={50} height={50} />, alt: 'Beatport Music'},
//     { icon: <Image src="/images/groove.svg" alt="Shazam" width={50} height={50} />, alt: 'Groove Music'},
//     { icon: <Image src="/images/yandex.svg" alt="Shazam" width={50} height={50} />, alt: 'Yandex Music'},
//     { icon: <Image src="/images/groove.svg" alt="Shazam" width={50} height={50} />, alt: 'Groove Music'},
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white text-center py-20 px-4 md:px-0 font-hammersmith-one">
//       <h2 className="text-5xl font-bold mb-8">THE PROBLEM WE ARE SOLVING</h2>
//       <p className="text-xl mb-4">
//         While music streaming has been popular these days,
//         <br />
//         it doesn&apos;t really highlight up and upcoming musicians and indie artists.
//       </p>
//       <p className="text-3xl font-semibold mb-8">
//         No Borders, No Limits:
//         <br />
//         Distribute your music worldwide
//       </p>
//       <div className="flex justify-center space-x-6 mb-8 mt-4">
//         {icons.map((icon, index) => (
//           <div
//             key={index}
//             className="relative w-15 h-15 transform transition-transform duration-300 hover:scale-125"
//             onMouseEnter={() => setHoveredIcon(icon.alt)}
//             onMouseLeave={() => setHoveredIcon(null)}
//           >
//             <Image src={icon.src} alt={icon.alt} width={56} height={56} />
//             {hoveredIcon === icon.alt && (
//               <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-gray-900 text-xs px-2 py-1 rounded-md opacity-95 text-white whitespace-nowrap shadow-lg">
//                 {icon.message}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <p className="italic mb-8 mt-4 text-opacity-20 cursor-pointer" onClick={() => setShowModal(true)}>
//         MANY MORE...
//       </p>

//       <Link href="/signup">
//         <button className="bg-gray-600 text-white px-8 py-5 text-lg rounded transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
//           Distribute Your Music Worldwide
//         </button>
//       </Link>

//       {/* Modal for showing more platforms using FaIcons and custom icons */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
//           <div className="relative bg-black p-8 rounded-md shadow-lg max-w-3xl mx-auto text-white">
//             <button
//               className="absolute top-2 right-4 text-2xl"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-semibold mb-6">We Distribute your Music on all the platforms Listed below!</h3>
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
//               {moreIcons.map((iconObj, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center transition-transform duration-300 hover:scale-125"
//                   onMouseEnter={() => setHoveredModalIcon(iconObj.alt)}
//                   onMouseLeave={() => setHoveredModalIcon(null)}
//                 >
//                   <div className={`text-5xl ${hoveredModalIcon === iconObj.alt ? 'text-white' : 'text-gray-400 opacity-40'}`}>
//                     {iconObj.icon}
//                   </div>
//                   <p className="mt-2 text-sm">{iconObj.alt}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ProblemSection.js

'use client'; // for client side rendering
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Import Font Awesome Icons from react-icons
import { FaFacebook, FaSpotify, FaApple, FaInstagram, FaYoutube, FaAmazon, FaDeezer, FaSoundcloud, FaTiktok, FaNapster, FaItunes, FaGooglePlay } from 'react-icons/fa';

export default function ProblemSection() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredModalIcon, setHoveredModalIcon] = useState(null); // Hover state for modal icons
  const [showModal, setShowModal] = useState(false); // Modal state

  const icons = [
    { src: '/images/apple-music.svg', alt: 'Apple Music', message: 'Distribute your music on Apple Music' },
    { src: '/images/spotify.svg', alt: 'Spotify', message: 'Distribute your music on Spotify' },
    { src: '/images/music.svg', alt: 'Music', message: 'Distribute your music on Amazon Music' },
    { src: '/images/shazam.svg', alt: 'Shazam', message: 'Distribute your music on Shazam' },
    { src: '/images/instagram.svg', alt: 'Instagram', message: 'Distribute your music on Instagram' },
    { src: '/images/youtube.svg', alt: 'YouTube', message: 'Distribute your music on YouTube' },
  ];

  const moreIcons = [
    { icon: <FaFacebook />, alt: 'Facebook' },
    { icon: <FaSpotify />, alt: 'Spotify' },
    { icon: <FaItunes />, alt: 'Apple Music' },
    { icon: <FaInstagram />, alt: 'Instagram' },
    { icon: <FaYoutube />, alt: 'YouTube' },
    { icon: <FaAmazon />, alt: 'Amazon Music' },
    { icon: <FaDeezer />, alt: 'Deezer' },
    { icon: <FaSoundcloud/>, alt: 'SoundCloud' },
    { icon: <FaTiktok/>, alt: 'Tiktok Music'},
    { icon: <FaNapster/>, alt: 'Napster Music'},
    { icon: <FaGooglePlay />, alt: 'Google Play'},
    { icon: <Image src="/images/shazam.svg" alt="Shazam" width={50} height={50} />, alt: 'Shazam'},
    { icon: <Image src="/images/jiosavan.svg" alt="Shazam" width={50} height={50} />, alt: 'Jio Savan'},
    { icon: <Image src="/images/tidal.svg" alt="Shazam" width={50} height={50} />, alt: 'Tidal Music'},
    { icon: <Image src="/images/pandora.svg" alt="Shazam" width={50} height={50} />, alt: 'Pandora Music'},
    { icon: <Image src="/images/beatport.svg" alt="Shazam" width={50} height={50} />, alt: 'Beatport Music'},
    { icon: <Image src="/images/groove.svg" alt="Shazam" width={50} height={50} />, alt: 'Groove Music'},
    { icon: <Image src="/images/yandex.svg" alt="Shazam" width={50} height={50} />, alt: 'Yandex Music'},
    { icon: <Image src="/images/resso.svg" alt="Shazam" width={50} height={50} />, alt: 'Resso Music'},
    { icon: <Image src="/images/peleton.svg" alt="Shazam" width={35} height={35} />, alt: 'Peleton Music'},
    { icon: <Image src="/images/tunedglobal.png" alt="Shazam" width={220} height={220} />, alt: 'Tuned Global'},
    { icon: <Image src="/images/vevo.png" alt="Shazam" width={170} height={170} />, alt: 'Vevo TV Music'},
    { icon: <Image src="/images/kkbox.png" alt="Shazam" width={130} height={130} />, alt: ''},
  ];

  return (
    <div className="min-h-screen bg-black text-white text-center py-20 px-4 md:px-0 font-hammersmith-one">
      <h2 className="text-5xl font-bold mb-8">THE PROBLEM WE ARE SOLVING</h2>
      <p className="text-xl mb-4">
        While music streaming has been popular these days,
        <br />
        it doesn&apos;t really highlight up and upcoming musicians and indie artists.
      </p>
      <p className="text-3xl font-semibold mb-8">
        No Borders, No Limits:
        <br />
        Distribute your music worldwide
      </p>
      <div className="flex justify-center space-x-6 mb-8 mt-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative w-15 h-15 transform transition-transform duration-300 hover:scale-125"
            onMouseEnter={() => setHoveredIcon(icon.alt)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Image src={icon.src} alt={icon.alt} width={56} height={56} />
            {hoveredIcon === icon.alt && (
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-gray-900 text-xs px-2 py-1 rounded-md opacity-95 text-white whitespace-nowrap shadow-lg">
                {icon.message}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="italic mb-8 mt-4 text-opacity-20 cursor-pointer" onClick={() => setShowModal(true)}>
        MANY MORE...
      </p>

      <Link href="/signup">
        <button className="bg-gray-600 text-white px-8 py-5 text-lg rounded transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          Distribute Your Music Worldwide
        </button>
      </Link>

      {/* Modal for showing more platforms using FaIcons and custom icons */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative bg-black p-8 rounded-md shadow-lg max-w-3xl mx-auto text-white border border-white"> {/* Added white border */}
            <button
              className="absolute top-2 right-4 text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-6">We Distribute your Music on all the platforms Listed below!</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {moreIcons.map((iconObj, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-125"
                  onMouseEnter={() => setHoveredModalIcon(iconObj.alt)}
                  onMouseLeave={() => setHoveredModalIcon(null)}
                >
                  <div className={`text-5xl ${hoveredModalIcon === iconObj.alt ? 'text-white' : 'text-gray-400 opacity-40'}`}>
                    {iconObj.icon}
                  </div>
                  <p className="mt-2 text-sm">{iconObj.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


