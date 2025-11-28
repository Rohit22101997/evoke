import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Heropm from "@/components/Heropm";
import Section1pm from "@/components/Section1pm";
import Section2pm from "@/components/Section2pm";
import Section3pm from "@/components/Section3pm";



export default function page() {
  return (
    <div>
    <Navbar/>
    <Heropm />
    <Section3pm/>

    <Section1pm/>
    <Section2pm/>
    

    <Footer/>
    </div>
  )
}
