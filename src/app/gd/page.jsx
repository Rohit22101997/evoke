import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfoliogd from "@/components/Portfoliogd";
import Herobannergd from "@/components/Herobannergd";
import Clientgd from "@/components/Clientgd";
import Tittlegd from '@/components/Tittlegd';



export default function page() {
  return (
    <div className=''>
    <Navbar/>
    <Herobannergd />
    <Clientgd />
    <Tittlegd />

    <Portfoliogd />

    <Footer/>
    </div>
  )
}
