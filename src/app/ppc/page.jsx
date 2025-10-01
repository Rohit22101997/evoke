import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Heroppc from "@/components/Heroppc";
import QuoteHero from "@/components/QuoteHero";
import Section6ppc from "@/components/Section6ppc";
import Section3ppc from "@/components/Section3ppc";
import Section7ppc from "@/components/Section7ppc";
import Section8ppc from "@/components/Section8ppc";
import Section10ppc from "@/components/Section10ppc";
import Section12ppc from "@/components/Section12ppc";


export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroppc />

    <QuoteHero
        title="We provide personalised solutions that are tailored to the unique needs of each of our clients."
        description="Grow your brand with powerful SEO strategies designed to boost visibility, attract customers, and turn online searches into lasting business success."
      />

      <Section3ppc />
    
    <Section8ppc />
     
    <Section6ppc />
  
     <Section7ppc />
     <Section10ppc />
     <Section12ppc />

    <Footer/>
    </div>
  )
}
