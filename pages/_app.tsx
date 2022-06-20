import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  AppShell,
  Navbar as MantineNavbar,
  Header,
  Text,
  ScrollArea
} from '@mantine/core';
import Navbar from '../components/molecules/Navbar/Navbar';
import HeaderMiddle from '../components/molecules/Header/HeaderMiddle';
import Layout from '../components/molecules/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
