import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1cgi from "@/components/Section1cgi";
import Section2cgi from "@/components/Section2cgi";
import Section3cgi from "@/components/Section3cgi";
import Section4cgi from "@/components/Section4cgi";
import Herocgi from "@/components/Herocgi";

export default function page() {
  return (
    <div>
    <Navbar/>
    <Herocgi />
    <Section1cgi />
    <Section3cgi />
    <Section4cgi />
     <Section2cgi />
    


    <Footer/>
    </div>
  )
}
