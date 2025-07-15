import ContactUs from '../components/ContactUs';
import Head from 'next/head';

export default function ContactPage() {

  return (
    <>
      <Head>
        <title>PK Fitness & Nutrition</title>
      </Head>
      <main data-scroll-container style={{ height: '100%', overflow: 'hidden' }}>
        <div className="animate">
          <ContactUs />
        </div>
      </main>
    </>
  );
}
