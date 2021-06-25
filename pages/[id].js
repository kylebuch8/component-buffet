import Head from 'next/head'

export default function Collection(collection) {
  return (
    <div className="wrapper container homepage">
      <Head>
        <title>{ collection.name } - Component Buffet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className=" main container">
        <header className="hero container">
        <h1 className="title">
          Welcome to the { collection.name } page
        </h1>
        <p dangerouslySetInnerHTML={{ __html: collection.summary }}></p>
        <pfe-icon icon="fas-github"></pfe-icon>
      </main> 
      <footer>
        Powered by{' '}<a href="https://www.youtube.com/watch?v=jBsPZV14I-k">Cheeseburgers in Paradise</a>
      </footer>
      </main>
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
          description: "Accordion for PatternFly Elements",
          repo: "https://github.com/patternfly/patternfly-elements/tree/master/elements/pfe-accordion",
          install: "npm i @patternfly/pfe-accordion",
          unpkg: "https://unpkg.com/@patternfly/pfe-accordion@latest/dist/pfe-accordion.umd.min.js",
          demo: "https://patternflyelements.org/components/accordion/",
          devDemo: "https://patternflyelements.org/elements/pfe-accordion/demo/",
          storybook: "https://patternflyelements.org/storybook/?path=/story/accordion--pfe-accordion"
        },
        {
          name: "pfe-cta",
          description: "Call-to-action for PatternFly Elements",
          repo: "https://github.com/patternfly/patternfly-elements/tree/master/elements/pfe-cta",
          install: "npm i @patternfly/pfe-cta",
          unpkg: "https://unpkg.com/@patternfly/pfe-cta@latest/dist/pfe-cta.umd.min.js",
          demo: "https://patternflyelements.org/components/cta/",
          devDemo: "https://patternflyelements.org/elements/pfe-cta/demo/",
          storybook: "https://patternflyelements.org/storybook/?path=/story/call-to-action--pfe-cta"
        },
        {
          name: "pfe-tabs",
          description: "Tabs for PatternFly Elements",
          repo: "https://github.com/patternfly/patternfly-elements/tree/master/elements/pfe-tabs",
          install: "npm i @patternfly/pfe-tabs",
          unpkg: "https://unpkg.com/@patternfly/pfe-accordion@latest/dist/pfe-accordion.umd.min.js",
          demo: "https://patternflyelements.org/components/tabs/",
          devDemo: "https://patternflyelements.org/elements/pfe-tabs/demo/",
          storybook: "https://patternflyelements.org/storybook/?path=/story/tabs--pfe-tabs"
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
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-auth",
          install: "npm i @chapeaux/cpx-auth"
        },
        {
          name: "cpx-branch",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-branch",
          install: "npm i @chapeaux/cpx-branch"
        },
        {
          name: "cpx-filter",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-filter",
          install: "npm i @chapeaux/cpx-filter"
        },
        {
          name: "cpx-keycloak",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-keycloak",
          install: "npm i @chapeaux/cpx-keycloak"
        },
        {
          name: "cpx-query",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-query",
          install: "npm i @chapeaux/cpx-query"
        },
        {
          name: "cpx-reporter",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-reporter",
          install: "npm i @chapeaux/cpx-reporter"
        },
        {
          name: "cpx-result",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-result",
          install: "npm i @chapeaux/cpx-result"
        },
        {
          name: "cpx-state",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-state",
          install: "npm i @chapeaux/cpx-state"
        },
        {
          name: "cpx-target",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-target",
          install: "npm i @chapeaux/cpx-target"
        },
        {
          name: "cpx-url",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-url",
          install: "npm i @chapeaux/cpx-url"
        },
        {
          name: "cpx-user",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-user",
          install: "npm i @chapeaux/cpx-user"
        },
        {
          name: "cpx-websocket",
          repo: "https://github.com/chapeaux/cpx-components/tree/main/components/cpx-websocket",
          install: "npm i @chapeaux/cpx-websocket"
        },
      ]
    },
    "op-components": {
      name: "One Platform Components",
      description: "One platform component library",
      repo: "https://github.com/1-Platform/op-components",
      components: [
        {
          name: "opc-back-to-top",
          description: "Back to Top component that enables smooth scroll from the bottom of the page to the top of the page.",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-back-to-top",
          install: "npm i @one-platform/opc-back-to-top"
        },
        {
          name: "opc-comment-input",
          description: "A standardized web component based on Lit Element for Red Hat One Platform to use as a comment input component.",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-comment-input",
          install: "npm i @one-platform/opc-comment-input"
        },
        {
          name: "opc-feedback",
          description: "opc-feedback component follows the One Platform design system and can be used as a popup to collect feedback from the end-users.",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-feedback",
          install: "npm i @one-platform/opc-feedback"
        },
        {
          name: "opc-footer",
          description: "A standardized web component based on Lit Element for Red Hat One Platform Footer.",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-footer",
          install: "npm i @one-platform/opc-footer"
        },
        {
          name: "opc-header",
          description: "A web component based on Lit Element for Red Hat One Platform Header",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-header",
          install: "npm i @one-platform/opc-header"
        },
        {
          name: "opc-input-chip",
          description: "A web component based on Lit Element for input chip filed",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-input-chip",
          install: "npm i @one-platform/opc-input-chip"
        },
        {
          name: "opc-styles",
          description: "This packages contains the all common styles which are important to get #### started with any component which includes global variables, colors, common mixin",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-styles",
          install: "npm i @one-platform/opc-styles"
        },
        {
          name: "opc-timeline",
          description: "A web component based on Lit Element to show a timeline for a specific range",
          repo: "https://github.com/1-Platform/op-components/tree/master/packages/opc-timeline",
          install: "npm i @one-platform/opc-timeline"
        }
      ]
    },
    "cp-elements": {
      name: "CP Elements",
      description: "This repo was created to keep track of custom web components made for the customer portal that aren't necessarily great candidates for open source.",
      repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements",
      components: [
        {
          name: "cp-comments",
          description: "Comments web component made for Red Hat Customer Portal",
          repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements/-/tree/master/elements/cp-comments"
        },
        {
          name: "cp-documentation",
          description: "Documentation element for CP Elements",
          repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements/-/tree/master/elements/cp-documentation"
        },
        {
          name: "cp-search-autocomplete",
          description: "Cp search autocomplete element for CP Elements",
          repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements/-/tree/master/elements/cp-search-autocomplete"
        },
        {
          name: "plcc-table",
          description: "Product lifecycle table web component.",
          repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements/-/tree/master/elements/plcc-table"
        },
        {
          name: "site-switcher",
          description: "Site switcher element for CP Elements",
          repo: "https://gitlab.cee.redhat.com/customer-platform/cp-elements/-/tree/master/elements/site-switcher"
        }
      ]
    }
  };

  return {
    props: data[params.id]
  };
}
