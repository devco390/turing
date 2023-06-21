import Head from 'next/head'
import Layout from '../layouts'

import data from '../data';

const Index = () => {

  console.log('==========================');
  console.log('style is the answer to everything...');
  console.log('https://youtu.be/nGnGj3zL-bU');
  console.log('==========================');

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.title}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={data.description}
        />
      </Head>

      <Layout data={data} />

    </div>
  )
}

export default Index
