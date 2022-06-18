import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundVideo from '../components/atoms/BackgroundVideo/BackgroundVideo';
import {
  Text,
  Center,
} from '@mantine/core';

const Home: NextPage = () => {
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
      src="/broll.mp4"
    >
      <Head>
        <title>JN</title>
        <meta
          name="description"
          content="Marketing, Branding, and Content Creation"
        />
      </Head>
      <Center
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          color: 'white',
        }}
      >
        <Text
          style={{
            fontSize: '5em',
          }}
        >
          Landing Page
        </Text>
      </Center>
    </BackgroundVideo>
  )
}

export default Home
