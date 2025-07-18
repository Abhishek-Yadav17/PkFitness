import AboutUs from '../components/AboutUs';
import Head from 'next/head';

export default function AboutPage() {

  return (
    <>
      <Head>
        <title>PK Fitness & Nutrition</title>
        <meta name="description" content="Your app for users in the United States, Canada, European countries, Australia, and India." />
        <meta name="keywords" content="United States, Canada, Europe, Australia, India" />
      </Head>
      <main data-scroll-container style={{ height: '100%', overflow: 'hidden' }}>
        <div className="animate">
          <AboutUs />
        </div>
      </main>
    </>
  );
}
