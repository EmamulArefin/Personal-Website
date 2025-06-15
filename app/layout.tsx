import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Md Emamul Arefin Islam - Full Stack Developer',
  description:
    'Professional portfolio of Md Emamul Arefin Islam, a skilled full stack web developer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, Web Developer, Portfolio',
  authors: [{ name: 'Md Emamul Arefin Islam' }],
  openGraph: {
    title: 'Md Emamul Arefin Islam - Full Stack Developer',
    description: 'Professional portfolio showcasing full stack development expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
