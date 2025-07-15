import AboutUs from '../components/AboutUs';
import Head from 'next/head';

export default function AboutPage() {

  return (
    <>
      <Head>
        <title>PK Fitness & Nutrition</title>
      </Head>
      <main data-scroll-container style={{ height: '100%', overflow: 'hidden' }}>
        <div className="animate">
          <AboutUs />
        </div>
      </main>
    </>
  );
}
