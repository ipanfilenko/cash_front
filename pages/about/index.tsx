import React from "react";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import styles from "./style.module.scss";

function About() {
  return (
    <Layout>
      <Wrapper className={styles.about}>
        <h1>ABOUT US</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          voluptates, voluptate quia, facilis, quod quam voluptas ab iure
          distinctio asperiores voluptatem! Perspiciatis, quae. Cupiditate
          dolores, autem voluptatibus tempora voluptas voluptate.
        </span>
      </Wrapper>
    </Layout>
  );
}

export default About;
