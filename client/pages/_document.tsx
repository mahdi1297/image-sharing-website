import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="modal-container"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
