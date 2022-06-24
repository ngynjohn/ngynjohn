import {
  useState,
  useEffect
} from 'react';
import { useRouter } from 'next/router';
import { useWindowEvent } from '@mantine/hooks';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [isScrolling, setScrolling] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const changeBackground = () => {
    window.scrollY >= 10 ? setScrolling(true) : setScrolling(false);
  }
  useWindowEvent('scroll', changeBackground);

  const path = router.pathname;

  useEffect(() => {
    path === '/videos'
      ? setShowFooter(false)
      : setShowFooter(true);
  }, [path])

  return (
    <>
      <Navbar
        links={
          [
            {
              link: '/',
              label: 'Home'
            },
            {
              link: '/videos',
              label: 'Videos',
            },
            {
              link: '/about',
              label: 'About'
            },
            {
              link: '/contact',
              label: 'Contact'
            },
          ]
        }
        isScrolling={isScrolling}
      />
      <main>
        {children}
      </main>
      {
        showFooter
          ? (<Footer/>)
          : null
      }
   </>
  );
}
