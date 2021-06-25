import Head from 'next/head'

export default function Collection(collection) {
  return (
    <div className="container">
      <Head>
        <title>{ collection.name } - Component Buffet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to the { collection.name } page
        </h1>
        <div dangerouslySetInnerHTML={{ __html: collection.summary }}></div>
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
  const data = {
    "patternfly-elements": {
      name: "PatternFly Elements",
      description: "Something really cool",
      summary: "<p>Something even more cool than the description</p>",
      repo: "https://github.com/patternfly/patternfly-elements",
      components: [
        {
          name: "pfe-accordion",
          install: "npm i @patternfly/pfe-accordion",
          unpkg: "https://unpkg.com/@patternfly/pfe-accordion@latest/dist/pfe-accordion.umd.min.js",
          demo: "https://patternflyelements.org/components/accordion/",
          devDemo: "https://patternflyelements.org/elements/pfe-accordion/demo/",
          storybook: "https://patternflyelements.org/storybook/?path=/story/accordion--pfe-accordion"
        },
        {
          name: "pfe-tabs",
          install: "npm i @patternfly/pfe-tabs",
          unpkg: "https://unpkg.com/@patternfly/pfe-accordion@latest/dist/pfe-accordion.umd.min.js",
          demo: "https://patternflyelements.org/components/tabs/",
          devDemo: "https://patternflyelements.org/elements/pfe-tabs/demo/",
          storybook: "https://patternflyelements.org/storybook/?path=/story/tabs--pfe-tabs"
        },
        {
          name: "pfe-cta",
          install: "npm i @patternfly/pfe-cta",
          unpkg: "https://unpkg.com/@patternfly/pfe-cta@latest/dist/pfe-cta.umd.min.js",
          demo: "https://patternflyelements.org/components/cta/",
          devDemo: "https://patternflyelements.org/elements/pfe-cta/demo/",
          storybook: "https://patternflyelements.org/storybook/?path=/story/call-to-action--pfe-cta"
        }
      ]
    },
    "chapeaux": {
      name: "Chapeaux",
      description: "Functional components",
      repo: "https://github.com/chapeaux/cpx-components",
      components: [
        {
          name: "cpx-auth",
          install: "npm i @chapeaux/cpx-user"
        },
        {
          name: "cpx-keycloak",
          install: "npm i @chapeaux/cpx-user"
        }
      ]
    },
    "op-components": {
      name: "One Platform Components",
      description: "One platform component library",
      repo: "https://github.com/1-Platform/op-components",
      components: [
        {
          name: "opc-back-to-top",
          install: "npm i @one-platform/opc-back-to-top"
        },
        {
          name: "opc-comment-input",
          install: "npm i @one-platform/opc-comment-input"
        },
        {
          name: "opc-feedback",
          install: "npm i @one-platform/opc-feedback"
        }
      ]
    },
    "cp-elements": {
      name: "CP Elements",
      description: "This repo was created to keep track of custom web components made for the customer portal that aren't necessarily great candidates for open source.",
      repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements",
      components: [
        {
          name: "cp-comments"
        },
        {
          name: "cp-documentation"
        },
        {
          name: "cp-search-autocomplete"
        },
        {
          name: "plcc-table"
        }
      ]
    }
  };

  return {
    props: data[params.id]
  };
}
