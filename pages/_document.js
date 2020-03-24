import Document, { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/nav";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Nav />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
