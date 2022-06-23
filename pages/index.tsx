import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundVideo from '../components/atoms/BackgroundVideo/BackgroundVideo';
import {
  Text,
  Center,
  ScrollArea,
  Burger,
  Stack
} from '@mantine/core';
import {
  Parallax,
  ParallaxLayer,
} from '@react-spring/parallax';
import Collage from '../components/molecules/Collage/Collage';

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const title = opened ? 'Close Menu' : 'Open Menu'

  return (
    <ScrollArea
      style={{
        height: 'max-content',
        width: '100vw',
        padding: '0',
        margin: '0',
        backgroundColor: 'black',
        overflowX: 'hidden',
      }}
    >
    <Head>
      <title>JN</title>
      <meta
        name="description"
        content="Marketing, Branding, and Content Creation"
      />
    </Head>
      <BackgroundVideo src="/crop.mp4" />
      <Collage />
    </ScrollArea>
  );
};

export default Home
