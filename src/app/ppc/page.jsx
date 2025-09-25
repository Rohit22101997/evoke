import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Heroppc from "@/components/Heroppc";
import QuoteHero from "@/components/QuoteHero";
import Section6ppc from "@/components/Section6ppc";
import Section3ppc from "@/components/Section3ppc";

export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroppc />

    <QuoteHero
        title="We provide personalised solutions that are tailored to the unique needs of each of our clients."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    
    <Section6ppc />
    <Section3ppc />

    <Footer/>
    </div>
  )
}
