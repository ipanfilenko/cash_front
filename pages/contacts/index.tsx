import React, { useState } from "react";
import classNames from "classnames";
import Head from "next/head";

import Layout from "../../components/Layout";
import Button from "../../components/shared/button";
import Wrapper from "../../components/Wrapper";

import styles from "./style.module.scss";

const successMessage = 'Thank you for your message. We will contact to you soon.'

function Contacts() {
  const [isSubmitted, setStatus] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setStatus(true);
  };

  const onChangeInput = () => {
    if (isSubmitted) {
      setStatus(false);
    }
  }

  return (
    <>
      <Head>
        <title>Octopus CashBack Browser: Contacts</title>
      </Head>
      <Layout>
        <Wrapper className={styles.contacts}>
          <h1 className={classNames(styles.title, "page-title")}>
            GET IN TOUCH
          </h1>
          <div className={classNames(styles.subtitle, "page-subtitle")}>
            You can contact us for more information
          </div>
          {
            isSubmitted && (<p className={styles.successMessage}>{successMessage}</p>)
          }
          <div className={styles.box}>
            <div className={styles.left}>
              <form className={classNames(styles.form, "form")} onSubmit={handleSubmit}>
                <div className="form__row">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    name="name"
                    required
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
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
                    onChange={onChangeInput}
                  />
                </div>
                <div className="form__row">
                  <Button as="button" type="submit">Send</Button>
                </div>
              </form>
            </div>
            <div className={styles.right}>
              <span className={styles.contactTitle}>Contact information</span>
              <div
                className={classNames(styles.contactRow, styles.contactAddress)}
              >
                <span className={styles.contactInfo}>
                  Germany,
                  <br />
                  Neckarsulm,
                  <br />
                  Heinz-Nixdorf-Str. 6
                  <br />
                  74172
                </span>
              </div>
              <div
                className={classNames(styles.contactRow, styles.contactEmail)}
              >
                <span className={styles.contactInfo}>info@cashbro.space</span>
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export default Contacts;
