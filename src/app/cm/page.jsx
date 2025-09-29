import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1cm from "@/components/Section1cm";
import Section2cm from "@/components/Section2cm";
import Section4cm from "@/components/Section4cm";
import Section6cm from "@/components/Section6cm";


export default function page() {
  return (
    <div>
    <Navbar/>
    <Section1cm />
    <Section2cm />
    <Section6cm />
    <Section4cm />
   

    <Footer/>
    </div>
  )
}
