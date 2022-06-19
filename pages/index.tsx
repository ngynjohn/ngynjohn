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
    <ScrollArea
      style={{
        paddingTop: '70px',
        height: '200vh',
        width: '100vw',
      }}
    >
      <BackgroundVideo
        src="/crop.mp4"
      />
      <Head>
        <title>JN</title>
        <meta
          name="description"
          content="Marketing, Branding, and Content Creation"
        />
      </Head>
      <Text
        color="white"
      >
        Test
      </Text>
    </ScrollArea>
  )
}

export default Home
