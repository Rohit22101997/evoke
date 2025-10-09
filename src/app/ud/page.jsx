import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1ud from "@/components/Section1ud";
import Section2ud from "@/components/Section2ud";
import Section3ud from "@/components/Section3ud";
import Section5ud from "@/components/Section5ud";
import Section6ud from "@/components/Section6ud";
import Section8ud from "@/components/Section8ud";
import Section10ud from "@/components/Section10ud";
import Heroud from "@/components/Heroud";

export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroud/>
    <Section1ud />
    <Section5ud />
    <Section6ud />
    <Section8ud />
    <Section10ud />
    <Section3ud />
    <Section2ud />


    <Footer/>
    </div>
  )
}
