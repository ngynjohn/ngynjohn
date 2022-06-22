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
      className={classes.wrapper}
      pages={5}
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
        offset={1}
        speed={1}
      >
        <Text
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '10em',
          }}
          color="white"
        >
          INSPIRE
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.7}
        speed={5}
      >
        <Text
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '2em',
            fontSize: '5em',
          }}
          color="white"
        >
          CREATE
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.9}
        speed={2.3}
      >
        <Text
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '2em',
            fontSize: '3em',
          }}
          color="white"
        >
          TALENT
        </Text>
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.left}
        offset={1.4}
        speed={3}
      >
        <ReactPlayer
          style={{
            position: 'absolute',
            left: 150,
          }}
          url="https://vimeo.com/576537006"
          width={500}
          controls={true}
        />
      </ParallaxLayer>

      <ParallaxLayer
        className={classes.right}
        offset={1.9}
        speed={2}
      >
        <ReactPlayer
          style={{
            position: 'absolute',
            right: 150,
          }}
          url="https://vimeo.com/717945664"
          width={500}
          controls={true}
        />
      </ParallaxLayer>

    </Parallax>
  );
};


