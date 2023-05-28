
import Script from "next/script";

import '../styles/animate.min.css'
import '../styles/bootstrap.min.css'

import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/loading.css'

function MyApp({ Component, pageProps }) {
  const GA_MEASUREMENT_ID = 'G-6908SVZHZ3';

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>)
}

export default MyApp
