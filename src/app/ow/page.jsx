import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sectionow from "@/components/Sectionow";
import Section2ow from "@/components/Section2ow";
import Section3ow from "@/components/Section3ow";


export default function page() {
  return (
    <div>
    <Navbar/>
    <Section3ow />
    <Sectionow />
    <Section2ow />
    <Footer/>
    </div>
  )
}
