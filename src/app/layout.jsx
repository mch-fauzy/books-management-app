import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import Navbar from '@/components/parts/Navbar'
import '@/assets/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Stores from '@/components/parts/Stores';
import { getCookie } from '@/lib/cookie';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Books Management App'
}

export default function RootLayout({ children }) {
  const token = getCookie('token');

  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Stores isAuth={!!token} />

        <Navbar />

        {children}

        <ToastContainer
          position="top-center"
          hideProgressBar
          closeOnClick
          pauseOnFocusLoss
          draggable
        />
      </body>
    </html>
  )
}
