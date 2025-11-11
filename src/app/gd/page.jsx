import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Herobannergd from "@/components/Herobannergd";
import Clientgd from "@/components/Clientgd";
import Tittlegd from '@/components/Tittlegd';
import Section3gd from '@/components/Section3gd';
import Section4gd from '@/components/Section4gd';
import Section5gd from '@/components/Section5gd';
import Section6gd from '@/components/Section6gd';
import Section7gd from '@/components/Section7gd';
import Section8gd from '@/components/Section8gd';
import Herogd from '@/components/Herogd';



export default function page() {
  return (
    <div className=''>
    <Navbar/>
    <Herogd />
    <Herobannergd />
    <Section4gd />
    <Section7gd />

    <Section5gd />
    <Section8gd />
    <Section6gd />


    <Clientgd />
    
        <Tittlegd />

    
    <Section3gd />

    <Footer/>
    </div>
  )
}
