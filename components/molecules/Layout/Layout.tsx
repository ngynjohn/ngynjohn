import { useState } from 'react';
import { useWindowEvent } from '@mantine/hooks';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps) {
  const [isScrolling, setScrolling] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 10 ? setScrolling(true) : setScrolling(false);
  }
  useWindowEvent('scroll', changeBackground);

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
          ]
        }
        isScrolling={isScrolling}
      />
      <main>
        {children}
      </main>
      <Footer
        isScrolling={isScrolling}
        data={[
          {
            title: 'Sitemap',
            links: [
              {
                label: 'Home',
                link: '/'
              },
              {
                label: 'Videos',
                link: '/videos'
              },
              {
                label: 'About',
                link: '/about'
              },
            ]
          },
          {
            title: 'Social',
            links: [
              {
                label: 'Tik Tok',
                link: 'https://tiktok.com/@ngynjohn'
              },
              {
                label: 'Instagram',
                link: 'https://instagram.com/ngynjohn'
              }
            ]
          }
        ]}
      />
   </>
  );
}
