import { useEffect } from 'react';
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
  const VIDEO_WIDTH = 1920;

  return (
    <Parallax
      className={classes.wrapper}
      pages={10}
    >
      <ParallaxLayer
        offset={0}
        speed={2.7}
      >
        <Text className={classes.inspire}>
          INSPIRE
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        offset={.8}
        speed={3}
      >
        <Text className={classes.create}>
          CREATE
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        offset={.9}
        speed={5}
      >
        <Text className={classes.talent}>
          TALENT
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        offset={.95}
        speed={4}
      >
        <Text className={classes.motivate}>
          MOTIVATE
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.whiteSquare}
        offset={.95}
        speed={1}
      />

      <ParallaxLayer
        offset={.95}
        speed={1.2}
      >
        <Text className={classes.transcend}>
          TRANSCEND
        </Text>
      </ParallaxLayer>


      <ParallaxLayer
        className={classes.videoDefault}
        offset={0}
        speed={2}
      >
        <ReactPlayer
          className={classes.videoOne}
          width={VIDEO_WIDTH}
          url="https://vimeo.com/576537006"
          controls={true}
        />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.videoDefault}
        offset={1}
        speed={2.5}
      >
        <ReactPlayer
          width={VIDEO_WIDTH}
          url="https://vimeo.com/717945664"
          controls={true}
        />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.alignCenter}
        offset={2}
        speed={2}
      >
        <ReactPlayer
          width={VIDEO_WIDTH}
          url="https://vimeo.com/716208763"
          controls={true}
        />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.alignCenter}
        offset={3}
        speed={3}
      >
        <ReactPlayer
          width={VIDEO_WIDTH}
          url="https://vimeo.com/196469406"
          controls={true}
        />
      </ParallaxLayer>
    </Parallax>
  );
};


