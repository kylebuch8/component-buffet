import Head from 'next/head';
import Link from 'next/link';

export default function Home({ collections }) {
  return (
    <div className="wrapper container homepage">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className=" main container">
        <pfe-band>
          <header className="hero ">
            <h1 className="title">Red Hat Web Component Buffet</h1>
            <p>Explore the projects which contain components designed by and for Red Hatters.</p>
            <br/>
          </header>
        </pfe-band>
        <article className="pfe-l-grid pfe-m-gutters pfe-m-all-6-col-on-md pfe-m-all-4-col-on-lg">
          {collections.map((collection, index) => (
            <pfe-card color="lightest" border key={ index }>
              <Link href={ collection.id }>
                <h3 slot="pfe-card--header"><a>{ collection.name }</a></h3>
              </Link>
              <p>{ collection.description }</p>
              <div slot="pfe-card--footer">
              <Link href={ collection.id }>
                <pfe-cta>
                  <a>View the collection</a>
                </pfe-cta>
              </Link>
              </div>
            </pfe-card>

          ))}
        </article>
        <aside>
        <br/> 
        <hr/>
        <br/>
        <h2>What are web components?</h2>
        <p>Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.</p>

        <p>Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.</p>

        <h2>Why are there multiple projects?</h2>
        <p>Different projects have different focus areas. There are reasons, ok?</p>


        </aside>
        <footer>
        Powered by{' '}<a href="https://www.youtube.com/watch?v=jBsPZV14I-k">Cheeseburgers in Paradise</a>
      </footer>
      </main>


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
          description: "A set of community-created web components based on PatternFly design."
        },
        {
          id: "chapeaux",
          name: "Chapeaux Components",
          description: "Web components for the many hats you wear."
        },
        {
          id: "op-components",
          name: "One Platform Components",
          description: "One platform component library."
        },
        {
          id: "cp-elements",
          name: "CPElements",
          description: "Custom web components made for the Customer Portal that aren't necessarily great candidates for open source."
        }
      ]
    }
  };
}
