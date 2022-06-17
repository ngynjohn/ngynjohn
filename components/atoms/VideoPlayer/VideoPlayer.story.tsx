import React, { Suspense } from 'react';
import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';
import VideoPlayer from "./VideoPlayer";

export default {
  title: 'Video Player',
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

export const Primary: ComponentStory<typeof VideoPlayer> = () => {
  return (
    <VideoPlayer
      src="../../../../public/assets/compressed.mp4"
      width="600px"
      height="400px"
      type="video/mp4"
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
    />
  );
};
