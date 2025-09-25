import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1History from "@/components/Section1History";
import Section2History from "@/components/Section2History";

export default function page() {
  return (
    <div>
    <Navbar/>
    <Section1History />
    <Section2History />
    <h1>HIII</h1>

    <Footer/>
    </div>
  )
}
