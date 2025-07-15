import Head from 'next/head';
import Homepage from '../components/Homepage';

export default function Home() {

  return (
    <>
      <Head>
        <title>PK Fitness</title>
      </Head>
      <main data-scroll-container style={{ height: '100%', overflow: 'hidden' }}>
        <div className="animate">
          <Homepage />
        </div>
      </main>
    </>
  );
}
