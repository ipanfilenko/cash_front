import Head from "next/head";
import Search from "../components/Search";
import Shortcuts from "../components/Shortcuts";
import News from "../components/News";

export default function Home() {
  const NEXT_PUBLIC_ADSENSE_KEY = process.env.NEXT_PUBLIC_ADSENSE_KEY;
  return (
    <>
      <Head>
        <title>Cash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${NEXT_PUBLIC_ADSENSE_KEY}`}
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Search />
      <Shortcuts />
      <News />
    </>
  );
}
