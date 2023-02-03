import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          id="Adsense-id"
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_KEY}
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
