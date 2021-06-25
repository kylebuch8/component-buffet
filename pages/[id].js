import Head from 'next/head'

export default function Collection(params) {
  return (
    <div className="container">
      <Head>
        <title>Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to the { params.id } page
        </h1>
      </main>

      <footer>
        Powered by{' '}<a href="https://www.youtube.com/watch?v=jBsPZV14I-k">Cheeseburgers in Paradise</a>
      </footer>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: "patternfly-elements"
      }
    },
    {
      params: {
        id: "chapeaux"
      }
    },
    {
      params: {
        id: "one-platform"
      }
    }
  ];

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // // Pass post data to the page via props
  // return { props: { post } }
  return {
    props: params
  };
}
