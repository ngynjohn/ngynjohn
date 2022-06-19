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
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
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
