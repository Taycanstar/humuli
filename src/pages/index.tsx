import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import Background from "@/components/Background";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

import LayoutWithFooter from "@/components/LayoutWithFooter";

export default function Home() {
  return (
    <LayoutWithFooter>
      <Background>
        <Head>
          <title>Humuli</title>
          <meta
            name="description"
            content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
          />
        </Head>
        <Hero />
      </Background>
      <PrimaryFeatures />
      <Careers />
      <About />
      <Contact />
    </LayoutWithFooter>
  );
}
