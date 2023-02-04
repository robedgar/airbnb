import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>airbnb</title>
        <meta name="description" content="Built by Rob Edgar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner */}
    </div>
  );
}
