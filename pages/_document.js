import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
          />
          <script src="css/style.css"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

          <script src="js/script.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
