import Head from 'next/head'

export default function Home({ collections }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to the Component Buffet
        </h1>
        {collections.map((collection, index) => (
          <h2 key={ index }>{ collection }</h2>
        ))}
      </main>

      <footer>
        Powered by{' '}<a href="https://www.youtube.com/watch?v=jBsPZV14I-k">Cheeseburgers in Paradise</a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // // Pass post data to the page via props
  // return { props: { post } }
  return {
    props: {
      collections: [
        "patternfly-elements", "chapeaux"
      ]
    }
  };
}
