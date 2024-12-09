import Layout from '../components/Layout'; // Adjust the path based on your project structure
import '../styles/globals.css'; // Ensure global styles are applied

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
