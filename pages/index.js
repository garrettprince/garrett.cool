import Head from 'next/head'
import Image from 'next/image'
import Header from '../lib/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Head>
        <title>garrett.cool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-4">
        {/* <HomeHero /> */}
        {/* <HomeMain /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}