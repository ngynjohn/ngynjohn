import {
  Text,
  Group
} from '@mantine/core';
import Image from 'next/image';
import {
  Parallax,
  ParallaxLayer
} from '@react-spring/parallax';
import BackgroundVideo from '../../atoms/BackgroundVideo/BackgroundVideo';
import ReactPlayer from 'react-player';
import { useStyles } from './Collection.styles';

export default function Collection() {
  const { classes } = useStyles();
  return (
    <Parallax
      pages={5}
      style={{
        top: '63',
        left: '0',
        backgroundColor: 'black',
      }}
    >

      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BackgroundVideo src="/crop.mp4" />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.right}
        speed={1}
        sticky={{
          start: 3,
          end: 5,
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/576537006"
          width={500}
          controls={true}
        />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.middle}
        speed={1}
        sticky={{
          start: 2,
          end: 5,
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/717945664"
          width={500}
          controls={true}
        />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.left}
        speed={3}
        sticky={{
          start: 1,
          end: 5,
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/151973189"
          width={500}
          controls={true}
        />
      </ParallaxLayer>

    </Parallax>
  );
};


