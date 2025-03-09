import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthContext"; // ✅ Ensure AuthProvider wraps the app
import "../styles/globals.css";

// ✅ Load Leaflet dynamically to avoid SSR issues
const loadLeafletIcons = () => {
  if (typeof window !== "undefined") {
    import("leaflet").then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    });
  }
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loadLeafletIcons();
  }, []);

  return (
    <AuthProvider> {/* ✅ Global Authentication Context */}
      <Head>
        <title>Cachina Pe - Ofrece, Vende, Compra y Alquila Fácilmente</title>
        <meta name="description" content="Encuentra y publica anuncios con facilidad en Cachina." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Cachina - Tu Mejor Marketplace" />
        <meta property="og:description" content="Publica y navega por anuncios de servicios, alquileres y más." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cachina.pe" />
        <link rel="icon" href="/images/cachina_logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
