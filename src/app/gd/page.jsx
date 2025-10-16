import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfoliogd from "@/components/Portfoliogd";
import Herobannergd from "@/components/Herobannergd";
import Clientgd from "@/components/Clientgd";
import Tittlegd from '@/components/Tittlegd';
import Section2gd from '@/components/Section2gd';



export default function page() {
  return (
    <div className=''>
    <Navbar/>
    <Herobannergd />
    <Clientgd />
    <Section2gd />
    <Tittlegd />

    <Portfoliogd />

    <Footer/>
    </div>
  )
}
