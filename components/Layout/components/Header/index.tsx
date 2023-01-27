import React from "react";
import Link from "next/link";
import Wrapper from "../../../Wrapper";
import styles from "./style.module.scss";
import Image from "next/image";
import Button from "../../../shared/button";

const { NEXT_PUBLIC_MOBILE_APPLICATION_LINK = "" } = process.env;

const navigationList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "About",
    path: "/about",
  },
];

function Header() {
  return (
    <div className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <Image alt="logo" src="/logo.svg" width={64} height={62} />
          </div>
          <ul className={styles.nav}>
            {navigationList.map((item) => {
              return (
                <li key={item.label} className={styles.navItem}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
          <Button
            as="link"
            target="_blank"
            href={NEXT_PUBLIC_MOBILE_APPLICATION_LINK}
            className={styles.button}
          >
            Get Started
          </Button>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
