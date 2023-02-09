/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import styles from "./style.module.scss";
import Head from "next/head";

const team = [
  {
    image: `/images/about-us/staff-1.jpg.webp`,
    name: "Roger Scott",
    position: "CEO & Owner"
  },
  {
    image: `/images/about-us/staff-2.jpg.webp`,
    name: "Harry Phelps",
    position: "Software Developer"
  },
  {
    image: `/images/about-us/staff-3.jpg.webp`,
    name: "David Owen",
    position: "Finance"
  },
  {
    image: `/images/about-us/staff-6.jpg`,
    name: "Lily Bryant",
    position: "HR"
  },
];

function About() {
  return (
    <>
      <Head>
        <title>Octopus CashBack Browser: About us</title>
      </Head>
      <Layout>
        <Wrapper className={styles.about}>
          <div className={styles.box}>
            <div className={styles.left}>
              <img src="/images/about-us/banner.png" alt="" />
            </div>
            <div className={styles.right}>
              <h1 className="page-title">ABOUT US</h1>
              <span className="page-subtitle">
                We are passionate about delivering high-quality products that
                are easy to use, and we are always working to enhance our
                browser to ensure it stays ahead of the curve. Our dedicated
                team of developers is constantly updating and refining Octopus
                Browser, so you can be sure that you are always using the latest
                technology.
              </span>
              <span className="page-subtitle">
                Octopus Browser is a powerful and advanced web browser that
                offers users a superior browsing experience with its fast and
                intuitive interface, customizable features, and advanced
                security tools. In addition to its advanced features, Octopus
                Browser also offers the opportunity to earn rewards for simply
                surfing the web. With its built-in rewards program, users can
                earn money for browsing websites and searching the web, which
                can then be redeemed. Octopus Browser is a unique and valuable
                tool for anyone who spends time online, offering a better
                browsing experience and a chance to earn rewards.
              </span>
            </div>
          </div>
          <div className={styles.team}>
            <h2 className="page-title">Our Team</h2>
            <ul className={styles.teamList}>
              {team.map((item) => {
                return (
                  <li key={item.image} className={styles.teamItem}>
                    <div className={styles.teamImage}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={styles.teamNameWrapper}>
                      <div className={styles.teamName}>{item.name}</div>
                      <div className={styles.teamNamePosition}>{item.position}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export default About;
