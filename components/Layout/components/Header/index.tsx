import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.scss";

import Wrapper from "../../../Wrapper";
import Button from "../../../shared/button";
import GooglePlayButton from "../../../shared/GooglePlayButton";

const navigationList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Blog",
    path: "/article",
  },
  {
    label: "Mission",
    path: "/mission",
  },
  {
    label: "Terms of Use",
    path: "/termsOfUse",
  },
  {
    label: "Contact",
    path: "/contacts",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "FAQ",
    path: "/faq",
  },
];

function Header() {
  return (
    <div className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.box}>
            <Button
              as="link"
              href={'/'}
              className={styles.logoWrapper}
            >
              <div className={styles.logo}>
                <Image alt="Octopus Browser" src="/logo.svg" width={64} height={62} priority />
                <div>Octopus Browser</div>
              </div>
            </Button>

          <ul className={styles.nav}>
            {navigationList.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              )
            )}
          </ul>

          <GooglePlayButton />
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
