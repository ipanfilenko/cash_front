import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

import Articles, { IArticlesProps } from "../components/Articles";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import articleService from "../services/articleService";
import GooglePlayButton from "../components/shared/GooglePlayButton";
import { reviews, settingsForReviewsSlider } from "../lib/reviews";

import styles from "./style.module.scss";

export async function getStaticProps() {
  const cashbackArticles = await articleService.getAllByCategory("cashback");

  return {
    props: { cashbackArticles },
  };
}

function Home({ cashbackArticles }: { cashbackArticles: IArticlesProps["articles"] }) {
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
          <div className={styles.titleWrapper}>
            <h2 className={styles.pageTitle}>The world&apos;s first cashback browser Octopus</h2>
            <div className={styles.mobileSubtitle}>Download for free, just surf the web, get paid for it</div>
          </div>

          <div className={styles.advantages}>
            <div className={styles.advantagesItem}>
              <Image
                src="/images/advantages/free-app.png"
                alt="Free and handy Android app"
                width="80"
                height="80"
                priority
              />
              <div>
              Free and handy Android app 
              </div>
            </div>

            <div className={styles.advantagesItem}>
              <Image
                src="/images/advantages/no-deposit.png"
                alt="No deposit required"
                width="80"
                height="80"
                priority
              />
              <div>
                No deposit required
              </div>
            </div>

            <div className={styles.advantagesItem}>
              <Image
                src="/images/advantages/bonus.png"
                alt="Real time bonus calculations"
                width="80"
                height="80"
                priority
              />
              <div>
                Real time bonus calculations
              </div>
            </div>

            <div className={styles.advantagesItem}>
              <Image
                src="/images/advantages/convert.png"
                alt="Convenient ways to pay"
                width="80"
                height="80"
                priority
              />
              <div>
                Convenient ways to pay
              </div>
            </div>
          </div>

          <div className={styles.mobile}>
            <Image
              className={styles.mobileImage}
              src="/images/mobile-app.jpg"
              alt="Mobile application"
              width="530"
              height="943"
              priority
            />
            <div className={styles.mobileRight}>
              <h2>Octopus - CashBack Browser</h2>
              <div>
                <p>
                  We are passionate about delivering high-quality products that are easy to use, and we are always working to enhance our browser to ensure it stays ahead of the curve. Our dedicated team of developers is constantly updating and refining Octopus Browser, so you can be sure that you are always using the latest technology.
                </p>
                <p>
                  Octopus Browser is a powerful and advanced web browser that offers users a superior browsing experience with its fast and intuitive interface, customizable features, and advanced security tools. In addition to its advanced features, Octopus Browser also offers the opportunity to earn rewards for simply surfing the web. With its built-in rewards program, users can earn money for browsing websites and searching the web, which can then be redeemed. Octopus Browser is a unique and valuable tool for anyone who spends time online, offering a better browsing experience and a chance to earn rewards.
                </p>
              </div>
              <GooglePlayButton />
            </div>
          </div>

          <div className={styles.mission}>
            <h2 className={styles.subTitle}>
              Our Mission
            </h2>
            <span className={styles.missionText}>
              The mission of Octopus Browser is to empower users to effortlessly
              explore and connect with the world wide web in a fast, secure and
              intuitive way. Our goal is to provide users with a personalized
              and efficient online experience that prioritizes speed, privacy,
              and convenience. By continuously innovating and improving our
              technology, we strive to be the go-to browser for all web users.
            </span>
          </div>

          <div className={styles.mission}>
          <h2 className={styles.subTitle}>How it works</h2>
          <div className={styles.howItWorks}>
            <div className={styles.howItWorksItem}>
              <Image
                src="/images/advantages/download.png"
                alt="Mobile application"
                width="80"
                height="80"
                priority
              />

              <div>
                To download the cashback browser app Octopus which pays you money for using it to browse the web, simply go to the Google Play Store and search for &quot;Octopus Cashback Browser&quot;. Download the app directly onto your Android device, create an account or login with an existing one, and start browsing!
              </div>
            </div>

            <div className={styles.howItWorksItem}>
              <Image
                src="/images/advantages/surfing.png"
                alt="Surfing"
                width="80"
                height="80"
                priority
              />

              <div>
                Now you can make money just by visiting your favorite sites on Google with the Android cacheback browser app Octopus! This innovative app pays you for using their services, and rewards users for activities like surfing the web, watching videos and completing online surveys. With Octopus, you&apos;ll be rewarded for all your online activity. The more you surf the web, the more money you could get in return.
              </div>
            </div>

            <div className={styles.howItWorksItem}>
              <Image
                src="/images/advantages/money.png"
                alt="Earn money"
                width="80"
                height="80"
                priority
              />

              <div>
                Surfing the web with the Android cacheback browser app Octopus can be a great way to make money from your usual daily activities on the Internet. As you go about your day, browsing websites or checking out social media, you can be earning cash rewards for doing so. Payments are received via payment systems such as PayPal, Bitcoin, or Skrill, and can also be used to purchase items on the internet.
              </div>
            </div>
          </div>
          </div>
          

          <div className={styles.reviews}>
            <h2 className={styles.subTitle}>
              What people are saying . . .
            </h2>

            <Slider {...settingsForReviewsSlider} className={styles.reviewsList}>
              {reviews.map((review) => (
                <div key={review.name} className={styles.reviewsItem}>
                  <div className={styles.reviewsAuthor}>
                    <Image src={review.image} width={60} height={60} alt="" priority />
                    <span>{review.name}</span>
                  </div>
                  <span className={styles.reviewsComment}>
                    {review.comment}
                  </span>
                </div>
              ))}
            </Slider>
          </div>

          <div>
            <h2 className={styles.subTitle}>What is Octopus Browser</h2>
            <div>
              <div>Introducing the CashBack Octopus Browser – the newest way to get paid while you surf the web. With this innovative mobile app, you can now make money while browsing with your usual Google search engine. Our app lets you earn real cashback rewards just by browsing websites.</div>
              <div>Tired of waiting for ads to take up space on your screen? Now, forget about wasting time and effort because with our application all your internet activities are rewarded with tangible benefits. There&lsquo;s no more room for frustration when it comes to earning money on the web!</div>
            </div>
          </div>
          <div>
            <h2 className={styles.subTitle}>Who the app is good for</h2>
            <div> With the CashBack Octopus Browser, it&lsquo;s easier than ever to access quality content and great deals at the same time. It&lsquo;s perfect for Internet users looking for a smarter, convenient way to utilize their surfing time and receive extra income. Don&lsquo;t miss out – download our free application now and start seeing financial benefit from your online activities!</div>
          </div>

          <div>
            <h2 className={styles.subTitle}>How the application works</h2>
            <div>CashBack Octopus Browser – a revolutionary new mobile app that helps you make money while browsing the web! With Octopus the possibilities are endless. Keep using the usual Google search or browse your favorite website, and get paid in return! The app works with a rewards system, giving you cash back for every website visited or search performed. With CashBack Octopus Browser, making money has never been easier.</div>
          </div>

          <div>
            <h2 className={styles.subTitle}>Security level</h2>
            <div>
              <div>Experience convenience and security at the same time. Login quickly with your existing Google account and start earning rewards whenever you go online. No extra setup is required – everything happens directly from within the app itself. Plus, our team of developers and financial professionals have worked together to provide maximum security for all transactions made through CashBack Octopus Browser. So you can be sure that your funds are always kept safe!</div>
              <div>If you’re an internet user, then CashBack Octopus Browser should be part of your daily routine. Start earning money for something you already do every day: surfing the web! Don’t miss out on this incredible opportunity – download now and see how much cash back you can earn!</div>
            </div>
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
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export default Home;
