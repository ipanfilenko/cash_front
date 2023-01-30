import classNames from "classnames";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/shared/button";
import Wrapper from "../../components/Wrapper";
import styles from "./style.module.scss";

function Contacts() {
  const [state, setState] = useState();
  const myArray = [1, 5, 3];
  const handleSubmit = () => {};

  return (
    <Layout>
      <Wrapper className={styles.contacts}>
        <h1 className={classNames(styles.title, "page-title")}>GET IN TOUCH</h1>
        <span className={classNames(styles.subtitle, "page-subtitle")}>
          You can contact us for more information
        </span>
        <div className={styles.box}>
          <div className={styles.left}>
            <form
              action="/"
              className={classNames(styles.form, "form")}
              onSubmit={handleSubmit}
            >
              <div className="form__row">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="input"
                  name="name"
                  required
                />
              </div>
              <div className="form__row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  name="email"
                  required
                />
              </div>
              <div className="form__row">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={2}
                  id="message"
                  className="input"
                  name="message"
                  required
                />
              </div>
              <div className="form__row">
                <Button as="button" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <span className={styles.contactTitle}>Contact information</span>
            <div
              className={classNames(styles.contactRow, styles.contactAddress)}
            >
              <span className={styles.contactInfo}>
                The Workshop
                <br /> 65 Westgate
                <br /> Street London E8 3RL
              </span>
            </div>
            <div className={classNames(styles.contactRow, styles.contactEmail)}>
              <span className={styles.contactInfo}>info@cashbro.space</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Contacts;