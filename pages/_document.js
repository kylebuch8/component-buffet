import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&family=Red+Hat+Text&display=swap" rel="stylesheet" /> */}
          <link rel="stylesheet" href="https://unpkg.com/@patternfly/pfelement@1.9.3/dist/pfelement.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/@patternfly/pfe-styles@1.9.3/dist/pfe-layouts.min.css" />
        </Head>
        <body unresolved="true">
          <Main />
          <NextScript />
          <script type="module" src="https://unpkg.com/@patternfly/pfe-band@1.9.3/dist/pfe-band.min.js"></script>
          <script type="module" src="https://unpkg.com/@patternfly/pfe-cta@1.9.3/dist/pfe-cta.min.js"></script>
          <script type="module" src="https://unpkg.com/@patternfly/pfe-card@1.9.3/dist/pfe-card.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument