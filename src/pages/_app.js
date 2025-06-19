// File: src/pages/_app.js
import Layout from '../components/layout/Layout';
import HeadSEO from '../components/layout/HeadSEO';
import ScrollToTop from '../components/ui/ScrollToTop';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadSEO />
      <Layout>
        <Component {...pageProps} />
        <ScrollToTop />
      </Layout>
    </>
  );
}

export default MyApp;