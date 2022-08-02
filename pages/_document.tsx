import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): ReactElement {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {/* All the metatags go in here. */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700;900&family=IBM+Plex+Mono:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-barlow dark:bg-[#070707]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
