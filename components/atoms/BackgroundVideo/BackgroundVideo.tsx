import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Container } from '@mantine/core';

export interface BackgroundVideoProps {
  src: string;
}

/**
 * background component
 */
export default function BackgroundVideo({
  src,
}: BackgroundVideoProps) {
  return (
    <VideoPlayer
      style={{
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        margin: '0',
        padding: '0',
        objectFit: 'cover',
        top: '0',
        left: '0',
        zIndex: '-1',
      }}
      src={src}
      type="video/mp4"
      autoPlay={true}
      muted={true}
      loop={true}
   />
  );
};
