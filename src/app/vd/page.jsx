import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Herovd from '@/components/Herovd';
import Section1vd from '@/components/Section1vd';
import Section2vd from '@/components/Section2vd';
import Section3vd from '@/components/Section3vd';
import Section5vd from '@/components/Section5vd';
import Textvd from '@/components/Textvd';
import Videovd from '@/components/Videovd';
import Section3ow from '@/components/Section3ow';


export default function page() {
  return (
    <div>
    <Navbar/>
    <Herovd />
    <Section1vd />
    <Videovd />
    <Textvd />
    <Section2vd />
    <Section3vd />
    <Section5vd />
    <Section3ow />

    <Footer/>
    </div>
  )
}
