// File: src/pages/_app.js
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeadSEO from '../components/layout/HeadSEO';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ScrollToTop from '../components/ui/ScrollToTop';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadSEO />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Layout>
          <Component {...pageProps} />
          <ScrollToTop />
        </Layout>
      )}
    </>
  );
}

export default MyApp;