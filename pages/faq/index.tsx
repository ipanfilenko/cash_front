import classNames from "classnames";
import Head from "next/head";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import { faqQuestions } from "../../lib/faq";
import styles from "./style.module.scss";

function Faq() {
  return (
    <>
      <Head>
        <title>Octopus CashBack Browser: Contacts</title>
      </Head>
      <Layout>
        <Wrapper className={styles.faq}>
          <h1 className={classNames("page-title")}>
            Have Questions?
          </h1>
          <Accordion allowMultipleExpanded preExpanded={faqQuestions.map((_, index) => index)}>
            {faqQuestions.map((question, index) => (
              <AccordionItem key={index} uuid={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>{question.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{question.message}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Wrapper>
      </Layout>
    </>
  );
}

export default Faq;
