import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundVideo from '../components/atoms/BackgroundVideo/BackgroundVideo';
import {
  Text,
  Center,
  ScrollArea,
  Burger
} from '@mantine/core';

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const title = opened ? 'Close Menu' : 'Open Menu'

  return (
    <BackgroundVideo
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1',
      }}
      src="/crop.mp4"
    >
      <Head>
        <title>JN</title>
        <meta
          name="description"
          content="Marketing, Branding, and Content Creation"
        />
      </Head>
      <ScrollArea
        style={{
          width: '100vw',
          height: '200vh',
        }}
      >

      </ScrollArea>
    </BackgroundVideo>
  )
}

export default Home
