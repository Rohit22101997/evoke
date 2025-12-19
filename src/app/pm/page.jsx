import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Heropm from "@/components/Heropm";
import Section1pm from "@/components/Section1pm";
import Section2pm from "@/components/Section2pm";
import Section3pm from "@/components/Section3pm";
import Section6pm from "@/components/Section6pm";
import Section7pm from "@/components/Section7pm";
import Section8pm from "@/components/Section8pm";



export default function page() {
  return (
    <div>
    <Navbar/>
    <Heropm />
    
    

    <Section3pm/>
    
    <Section7pm/>
    <Section8pm/>
    <Section6pm/>

    <Section1pm/>
    
    <Section2pm/>
    

    <Footer/>
    </div>
  )
}
