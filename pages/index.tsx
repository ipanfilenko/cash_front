import Head from "next/head";
import Search from "../components/Search";
import Shortcuts from "../components/Shortcuts";
import News from "../components/News";


export default function Home() {
  return (
    <>
      <Head>
        <title>Cash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Search />
      <Shortcuts />
      <News />
    </>
  );
}
