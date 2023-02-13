import React from "react";
import Head from "next/head";

import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import styles from "./style.module.scss";


function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Octopus CashBack Browser: Terms of Use</title>
      </Head>
      <Layout>
        <Wrapper>
          <div className={styles.box}>
            <p>
              You can use the browser just like a simple browser on your phone, but unlike other browsers, Octopus Browser pays a reward for your activity on the web.
            </p>
            <p>
              The amount of remuneration depends on the time spent on the network, the number of resources visited during the session, the country of your location, as well as on the content of these resources.
            </p>
            <p>
              (Currently, monetization is only available for users in India)
            </p>
            <p>
                <div>The standard charge varies from Rs 0.001 to Rs 0.15 per visit and depends on a number of factors such as:</div>
                <ul>
                  <li>Time spent on site</li>
                  <li>Website Theme</li>
                  <li>Number of pages visited in the previous session</li>
                  <li>Other parameters of affiliate networks</li>
                </ul>
            </p>
            <p>
              Withdrawal of funds is possible when the amount of savings reaches more than 10 rupees on your balance.
            </p>
            <p>
              The balance can only be withdrawn to your UPI address. For the withdrawal of funds, the Bank operator charges a commission and the commission depends on the amount of withdrawal
            </p>
            <p>
              The amount of the commission is displayed in your application on the withdrawal page.
            </p>
            <p>
              If you have any questions about the application, please contact the user support service: <a href="mailto:info@cashbro.space">info@cashbro.space</a>
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export default TermsOfUse;
