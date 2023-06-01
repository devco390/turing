
import Script from "next/script";

import '../styles/animate.min.css'
import '../styles/bootstrap.min.css'

import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/loading.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
    </>)
}

export default MyApp
