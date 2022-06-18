import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Container } from '@mantine/core';

export interface BackgroundVideoProps {
  children: JSX.Element | JSX.Element[];
  src: string;
  style: {};
}

/**
 * background component
 */
export default function BackgroundVideo({
  children,
  src,
  style,
}: BackgroundVideoProps) {
  return (
    <Container
      style={{
        padding: '0',
      }}
      fluid
    >
      {children}
      <VideoPlayer
        style={{
          ...style
        }}
        src={src}
        type="video/mp4"
        autoPlay={true}
        muted={true}
        loop={true}
      />
    </Container>
  );
};
