import Head from 'next/head';
import Link from 'next/link';

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
          <pfe-card key={ index }>
            <h2>{ collection.name }</h2>
            <p>{ collection.description }</p>
            <Link href={ collection.id }>
              <pfe-cta>
                <a>Go to the collection</a>
              </pfe-cta>
            </Link>
          </pfe-card>
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
        {
          id: "patternfly-elements",
          name: "PatternFly Elements",
          description: "Something really cool"
        },
        {
          id: "chapeaux",
          name: "Chapeaux",
          description: "Functional components"
        }
      ]
    }
  };
}
