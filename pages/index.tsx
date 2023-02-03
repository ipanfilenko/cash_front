import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Articles, { IArticlesProps } from "../components/Articles";
import Layout from "../components/Layout";
import Button from "../components/shared/button";
import Wrapper from "../components/Wrapper";
import styles from "./style.module.scss";
import articleService from "../services/articleService";
import Slider from "react-slick";

const reviews = [
  {
    image: "/images/reviews/1.png",
    name: "Satish Captian",
    comment:
      "Ohh. Best App For Target Money. I Resived My Money Within 4 Week. Nice App. Thank you.",
  },
  {
    image: "/images/reviews/2.png",
    name: "Anupam Gulati",
    comment: "I got my money, this is an amazing app. Go for it.",
  },
  {
    image: "/images/reviews/3.jpg",
    name: "Shivu bro",
    comment: "Nice app",
  },
];

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
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
              src="/images/mobile-app.jpg"
              alt="Mobile application"
              width="530"
              height="943"
            />
            <div className={styles.mobileRight}>
              <h1 className={styles.mobileTitle}>Octopus - CashBack Browser</h1>
              <span className={styles.mobileSubtitle}>
                Octopus Browser is a great source for earning extra 💸MONEY💸
                just surfing the internet, shopping online and doing ordinary,
                everyday tasks. Octopus Browser is fast and safe, we offer the
                same primary features of other browsers like Downloading, News
                Browsing, and Video Watching.
              </span>
              <Button
                as="link"
                target="_blank"
                href={process.env.NEXT_PUBLIC_MOBILE_APPLICATION_LINK}
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
              The mission of Octopus Browser is to empower users to effortlessly
              explore and connect with the world wide web in a fast, secure and
              intuitive way. Our goal is to provide users with a personalized
              and efficient online experience that prioritizes speed, privacy,
              and convenience. By continuously innovating and improving our
              technology, we strive to be the go-to browser for all web users.
            </span>
          </div>
          <div className={styles.reviews}>
            <span className={classNames(styles.reviewsTitle, "title")}>
              What people are saying . . .
            </span>
            <Slider {...settings} className={styles.reviewsList}>
              {reviews.map((review) => (
                <div key={review.name} className={styles.reviewsItem}>
                  <div className={styles.reviewsAuthor}>
                    <Image src={review.image} width={60} height={60} alt="" />
                    <span>{review.name}</span>
                  </div>
                  <span className={styles.reviewsComment}>
                    {review.comment}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.articles}>
            <Articles
              title={
                <span>
                  Learn more about <span className="mark">Cashback</span>
                </span>
              }
              articles={cashbackArticles}
            />
            <Articles
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
