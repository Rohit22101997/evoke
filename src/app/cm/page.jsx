import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Herocm from "@/components/Herocm";
import Section1cm from "@/components/Section1cm";
import Section2cm from "@/components/Section2cm";
import Section4cm from "@/components/Section4cm";
import Section6cm from "@/components/Section6cm";
import Section8cm from "@/components/Section8cm";
import Section9cm from "@/components/Section9cm";
import QuoteHerocm from "@/components/QuoteHerocm";



export default function page() {
  return (
    <div>
    <Navbar/>
    <Herocm />
    <Section9cm />
    <Section1cm />
    <Section2cm />
    
    
    <QuoteHerocm
            title="We craft tailored content strategies that connect, engage, and drive results."
            description="Build your brand with powerful content marketing strategies designed to captivate audiences, build trust, and turn meaningful stories into lasting business growth."
          />
          <Section8cm />
    
    <Section6cm />
    <Section4cm />
   
    
    <Footer/>
    </div>
  )
}
