/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import styles from "./style.module.scss";

const team = [
  {
    image: `/images/about-us/staff-1.jpg.webp`,
    name: "Roger Scott",
  },
  {
    image: `/images/about-us/staff-2.jpg.webp`,
    name: "Roger Scott",
  },
  {
    image: `/images/about-us/staff-3.jpg.webp`,
    name: "Roger Scott",
  },
  {
    image: `/images/about-us/staff-4.jpg.webp`,
    name: "Roger Scott",
  },
];

function About() {
  return (
    <Layout>
      <Wrapper className={styles.about}>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src="/images/about-us/banner.png" alt="" />
          </div>
          <div className={styles.right}>
            <h1 className="page-title">ABOUT US</h1>
            <span className="page-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              voluptates, voluptate quia, facilis, quod quam voluptas ab iure
              distinctio asperiores voluptatem! Perspiciatis, quae. Cupiditate
              dolores, autem voluptatibus tempora voluptas voluptate.
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
                  <span className={styles.teamName}>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default About;
