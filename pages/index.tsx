import type { NextPage } from 'next'
import Head from 'next/head'
import VideoPlayer from "../components/atoms/VideoPlayer/VideoPlayer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN</title>
        <meta name="description" content="Marketing, Branding, and Content Creation" />
      </Head>
        <VideoPlayer
          src="/short.mp4"
          width="600px"
          height="500px"
          autoPlay={true}
          loop={true}
          muted={true}
        />
    </div>
  )
}

export default Home
