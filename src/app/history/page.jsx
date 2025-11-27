import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1History from "@/components/Section1History";
import Section3history from "@/components/Section3history";
import Section2History from "@/components/Section2History";
import Section5history from "@/components/Section5history";
import Section6history from "@/components/Section6history";
import Section7history from "@/components/Section7history";
import Section9history from "@/components/Section9history";
import Herohistory from "@/components/Herohistory";


export default function page() {
  return (
    <div>
    <Navbar/>
    <Herohistory />
    <Section3history />
    <Section9history />
      <Section7history />
    <Section6history />

    <Section5history />
    <Section1History />
    <Section2History />

    <Footer/>
    </div>
  )
}
