type Video = 'video/mp4' | 'video/webm' | 'video/ogg'
export interface VideoPlayerProps {
  src: string;
  type: Video;
  width: string;
  height: string;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  playsInline: boolean;
  style: {};
}

/**
 * video player component
 */
export default function VideoPlayer({
  width,
  height,
  autoPlay,
  loop,
  muted,
  src,
  type,
  playsInline,
  style,
}: Partial<VideoPlayerProps>) {
  return (
    <video
      style={{
        pointerEvents: `${playsInline ? 'none' : 'auto'}`,
        ...style
      }}
      width={width}
      height={height}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
    >
      <source
        src={src}
        type={type}
      />
    </video>
  );
};
