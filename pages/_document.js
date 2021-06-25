import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://static.redhat.com/libs/redhat/redhat-theme/4/advanced-theme.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://static.redhat.com/libs/redhat/redhat-font/2/webfonts/red-hat-font.css" />
          <link rel="stylesheet" href="https://unpkg.com/@patternfly/pfelement@1.9.3/dist/pfelement.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/@patternfly/pfe-styles@1.9.3/dist/pfe-base.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/@patternfly/pfe-styles@1.9.3/dist/pfe-layouts.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/@patternfly/pfe-styles@1.9.3/dist/pfe-typography-classes.min.css" />
        </Head>
        <body unresolved="true">
          <Main />
          <NextScript />
          <script type="module" src="https://unpkg.com/@patternfly/pfe-band@1.9.3/dist/pfe-band.min.js"></script>
          <script type="module" src="https://unpkg.com/@patternfly/pfe-cta@1.9.3/dist/pfe-cta.min.js"></script>
          <script type="module" src="https://unpkg.com/@patternfly/pfe-card@1.9.3/dist/pfe-card.min.js"></script>
          <script type="module" src="https://unpkg.com/@patternfly/pfe-icon@1.9.3/dist/pfe-icon.min.js"></script>
          <script type="module" src="main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument