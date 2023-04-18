import Head from 'next/head'
import Layout from '../layouts'

import data from '../data';

const Index = () => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.title}</title>
      </Head>

      <Layout />

    </div>
  )
}

export default Index
