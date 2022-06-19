import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  AppShell,
  Navbar as MantineNavbar,
  Header,
} from '@mantine/core';
import Navbar from '../components/molecules/Navbar/Navbar';
import HeaderMiddle from '../components/molecules/Header/HeaderMiddle';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell
      style={{
        overflow: 'hidden'
      }}
      header={<Navbar />}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp
