import Head from 'next/head';
import Link from 'next/link';

export default function Home({ collections }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container homepage">
        <header className="hero container">
          <h1 className="title">
            Welcome to the Red Hat web component buffet!
          </h1>
          <p>Explore the projects which contain components designed by and for Red Hatters.</p>
        </header>
          <article className="pfe-l-grid pfe-m-gutters pfe-m-all-6-col pfe-m-all-4-col-on-md pfe-m-all-3-col-on-lg">
          {collections.map((collection, index) => (
            <pfe-card color="lightest" border key={ index }>
              <Link href={ collection.id }>
                <h2 slot="pfe-card--header"><a href="#">{ collection.name }</a></h2>
              </Link>
              <p>This is the lightest card with a border</p>
              <div slot="pfe-card--footer">
              <Link href={ collection.id }>
                <pfe-cta>
                  <a href="#">View this collection</a>
                </pfe-cta>
              </Link>
              </div>
            </pfe-card>

          ))}
        </article>
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
