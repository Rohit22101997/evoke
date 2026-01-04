import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Section3ow from "@/components/Section3ow";
import Section1ow from "@/components/Section1ow";
import Section6ow from "@/components/Section6ow";
import Section7ow from "@/components/Section7ow";
import Section8ow from "@/components/Section8ow";
import Section9ow from "@/components/Section9ow";
import Section10ow from "@/components/Section10ow";
import Heroow from "@/components/Heroow";


export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroow />
    <Section7ow />
    <Section10ow />
     <Section9ow />
    <Section8ow />
    
    <Section6ow />
    <Section1ow />
    <Section3ow />
    
    <Footer/>
    </div>
  )
}
