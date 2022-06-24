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
import Footer from '../Footer/Footer';
import BackgroundVideo from '../../atoms/BackgroundVideo/BackgroundVideo';
import ReactPlayer from 'react-player';
import { useStyles } from './Collection.styles';

export default function Collection() {
  const { classes } = useStyles();
  const VIDEO_WIDTH = 1920;

  return (
    <Parallax
      className={classes.wrapper}
      pages={5}
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
        offset={.9}
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
        className={classes.transcendLayer}
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
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '900vh',
        }}
        offset={1}
        speed={2.5}
      >
        <div className={classes.backgroundLines} />
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          display: 'flex',
          width: '100%',
          height: 'max-content',
          justifyContent: 'center',
          paddingRight: '27.36em',
          marginTop: '50em',
        }}
        offset={1}
        speed={2.3}
      >
        <div className={classes.circle}>
          <svg
            height="500"
            width="200"
          >
            <circle
              cx="0"
              cy="220"
              r="10%"
              fill="white"
            />
          </svg>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: 'max-content',
          marginTop: '40em',
          paddingLeft: '40em',
        }}
        offset={1}
        speed={.3}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="223.646"
          height="223.646">
          <path
            stroke="white"
            fill="none"
            stroke-width="1"
            d="M112.5, 222.85L111.82, 223.65L16.62, 111.82L111.82, 0M111.82, 0L112.5, 0.8"
          />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          width: 'max-content',
          height: 'max-content',
          position: 'absolute',
          top: '50em',
          left: 908,
        }}
        offset={1}
        speed={.7}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="223.646"
          height="223.646"
        >
          <path
            stroke="white"
            fill="none"
            stroke-width="1"
            d="M111.82, 0L207.02, 111.82L111.82, 223.65L111, 222.69M111, 0.96L111.82, 0"
          />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          width: 'max-content',
          height: 'max-content',
          position: 'absolute',
          top: '80em',
          left: 325,
        }}
        offset={1}
        speed={.6}
      >
        <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">

          <g>
            <title>Layer 1</title>
            <path
              id="imagebot_2"
              fill="none"
              stroke-width="1"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke="white"
              d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
            />
          </g>
          <metadata>
            image/svg+xmlOpenclipartRectangle2012-12-05T06:44:10https://openclipart.org/detail/173527/rectangle-by-jkarthik08-173527jkarthik08squaregeometricshape
          </metadata>
        </svg>
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
      <ParallaxLayer
        offset={4}
      >
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};


