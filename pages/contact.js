import ContactUs from '../components/ContactUs';
import Head from 'next/head';

export default function ContactPage() {

  return (
    <>
      <Head>
        <title>PK Fitness & Nutrition</title>
        <meta name="description" content="Your app for users in the United States, Canada, European countries, Australia, and India." />
        <meta name="keywords" content="United States, Canada, Europe, Australia, India" />
      </Head>
      <main>
        <div className="animate">
          <ContactUs />
        </div>
      </main>
    </>
  );
}
