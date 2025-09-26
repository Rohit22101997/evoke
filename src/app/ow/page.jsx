import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sectionow from "@/components/Sectionow";
import Section2ow from "@/components/Section2ow";
import Section3ow from "@/components/Section3ow";
import Section1ow from "@/components/Section1ow";
import Section6ow from "@/components/Section6ow";
import Section7ow from "@/components/Section7ow";
import Section8ow from "@/components/Section8ow";


export default function page() {
  return (
    <div>
    <Navbar/>
    <Section8ow />
    <Section7ow />
    <Section6ow />
    <Section1ow />
    <Section3ow />
    <Sectionow />
    <Section2ow />
    <Footer/>
    </div>
  )
}
