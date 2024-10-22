'use client'; // Needed for client-side hooks 
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Hide Navbar 
  const hideNavbar = ['/login', '/signup', '/reset', '/upgrade', '/upgrade-duo', '/upgrade-label', '/subscription']
    .includes(pathname) || pathname.startsWith('/dashboard');

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
      </head>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
