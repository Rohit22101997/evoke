import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1ud from "@/components/Section1ud";
import Section2ud from "@/components/Section2ud";

export default function page() {
  return (
    <div>
    <Navbar/>
    <Section1ud />
    <Section2ud />


    <Footer/>
    </div>
  )
}
