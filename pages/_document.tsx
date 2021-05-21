import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import GTMNoScript from 'components/head/gtm-noscript'
import GTMScript from 'components/head/gtm-script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <GTMScript />
        </Head>
        <body>
          <GTMNoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
