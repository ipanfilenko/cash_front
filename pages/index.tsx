import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Articles, { IArticlesProps } from "../components/Articles";
import Layout from "../components/Layout";
import Button from "../components/shared/button";
import Wrapper from "../components/Wrapper";
import styles from "./style.module.scss";
import articleService from "../services/articleService";

const { NEXT_PUBLIC_MOBILE_APPLICATION_LINK = "" } = process.env;

export async function getStaticProps() {
  const cashbackArticles = await articleService.getAllByCategory("cashback");
  const cricketkArticles = await articleService.getAllByCategory("cricket");
  return {
    props: {
      cashbackArticles,
      cricketkArticles,
    },
  };
}

export default function Home({
  cashbackArticles,
  cricketkArticles,
}: {
  cashbackArticles: IArticlesProps["articles"];
  cricketkArticles: IArticlesProps["articles"];
}) {
  return (
    <>
      <Head>
        <title>
          Octopus CashBack Browser: Get money for surfing the Internet
        </title>
        <meta
          name="description"
          content="The revolutionary cashback browser Octopus changes the rules of the game - now you earn money just for surfing the web. Download the app and earn money."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Wrapper className={styles.wrapper}>
          <div className={styles.mobile}>
            <Image
              className={styles.mobileImage}
              src="/images/mobile-app.webp"
              alt="Mobile application"
              width="530"
              height="943"
            />
            <div className={styles.mobileRight}>
              <h1 className={styles.mobileTitle}>Octopus - CashBack Browser</h1>
              <span className={styles.mobileSubtitle}>
                Octopus Browser is a great source of extra income 💸MONEY💸 just
                by surfing the internet, shopping online and doing some tasks.
              </span>
              <Button
                as="link"
                target="_blank"
                href={NEXT_PUBLIC_MOBILE_APPLICATION_LINK}
                className={styles.mobileButton}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className={styles.mission}>
            <span className={classNames(styles.missionTitle, "title")}>
              Our Mission
            </span>
            <span className={styles.missionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
          <div className={styles.reviews}>
            <span className={classNames(styles.reviewsTitle, "title")}>
              What people are saying . . .
            </span>
            <ul className={styles.reviewsList}>
              <li className={styles.reviewsItem}>
                <div className={styles.reviewsAuthor}>
                  <Image
                    src="/images/reviews/1.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <span>Joseph Fakeman</span>
                </div>
                <span className={styles.reviewsComment}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus illum sunt aliquam aliquid quia inventore,
                  distinctio consequatur iste aperiam expedita.
                </span>
              </li>
              <li className={styles.reviewsItem}>
                <div className={styles.reviewsAuthor}>
                  <Image
                    src="/images/reviews/2.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <span>Arthur Vandelay</span>
                </div>
                <span className={styles.reviewsComment}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus illum sunt aliquam aliquid quia inventore,
                  distinctio consequatur iste aperiam expedita.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.articles}>
            <Articles
              type="cashback"
              title={
                <span>
                  Learn more about <span className="mark">Cashback</span>
                </span>
              }
              articles={cashbackArticles}
            />
            <Articles
              type="cricket"
              title={
                <span>
                  Learn more about <span className="mark">Cricket</span>
                </span>
              }
              articles={cricketkArticles}
            />
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
