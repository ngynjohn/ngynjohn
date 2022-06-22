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
import Collection from '../components/molecules/Collection/Collection'

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const title = opened ? 'Close Menu' : 'Open Menu'

  return (
    <ScrollArea
      style={{
        height: '200vh',
        width: '100vw',
        padding: '0',
        margin: '0',
        backgroundColor: 'black'
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
    </ScrollArea>

  )
}

/**
<ParallaxLayer
  offset={0}
  speed={2.5}
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <BackgroundVideo src="/crop.mp4" />
</ParallaxLayer>

<ParallaxLayer
  style={{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'max-content',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '90px',
    overflow: 'hidden',
  }}
  sticky={{
    start: 1,
    end: 3
  }}
  speed={5}
>
  <ReactPlayer
    url="https://vimeo.com/151973189"
    controls={true}
  />
</ParallaxLayer>

<ParallaxLayer
  style={{
    position: 'absolute',
    top: '50px',
    overflow: 'hidden',
    zIndex: -1,
  }}
  sticky={{
    start: 1,
    end: 3,
  }}
  speed={5}
>
  <div
    style={{
      position: 'absolute',
      backgroundColor: 'white',
      transform: 'rotate(45deg) translate(-25em, 43em)',
      width: '2700px',
      height: '2000px',
      zIndex: -1,
    }}
  />

</ParallaxLayer>

<ParallaxLayer
  style={{
    position: 'absolute',
    top: '50px',
    overflow: 'hidden',
    zIndex: -1,
  }}
  sticky={{
    start: 3.5,
    end: 6,
  }}
  speed={5}
>
  <div
    style={{
      position: 'absolute',
      backgroundColor: 'white',
      width: '2700px',
      height: '2000px',
      zIndex: -2,
    }}
  />

  <div
    style={{
      position: 'absolute',
      backgroundColor: 'black',
      transform: 'rotate(45deg) translate(-350px, 700px)',
      width: '2700px',
      height: '2000px',
      zIndex: -1,
    }}
  />

</ParallaxLayer>

<ParallaxLayer
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'max-content',
    paddingTop: '540px',
    paddingLeft: '80px',
    paddingRight: '80px',
  }}
  sticky={{
    start: 2,
    end: 4
  }}
>
  <ReactPlayer
    url="https://vimeo.com/717945664"
    controls={true}
  />
</ParallaxLayer>

<ParallaxLayer
  style={{
    position: 'absolute',
    top: '500px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: -1,
  }}
  sticky={{
    start: 2,
    end: 4,
  }}
>
  <div
    style={{
      position: 'absolute',
      backgroundColor: 'black',
      transform: 'rotate(-45deg) translate(-15em, 290px)',
      width: '140vw',
      height: '150vh',
      zIndex: -1,
    }}
  />
</ParallaxLayer>

<ParallaxLayer
  style={{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'max-content',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '90px',
    overflow: 'hidden',
  }}
  sticky={{
    start: 3.5,
    end: 6
  }}
  speed={5}
>
  <ReactPlayer
    url="https://vimeo.com/576537006"
    controls={true}
  />
</ParallaxLayer>

<ParallaxLayer
  style={{
    position: 'absolute',
    top: '500px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: -1,
  }}
  sticky={{
    start: 5,
    end: 7,
  }}
>
  <div
    style={{
      position: 'absolute',
      backgroundColor: 'white',
      transform: 'rotate(-45deg) translate(-15em, 290px)',
      width: '140vw',
      height: '150vh',
      zIndex: -1,
    }}
  />
</ParallaxLayer>
*/
export default Home
