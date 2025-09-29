import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import  Card1 from '@/components/Card1';
import Video from '@/components/Video';
import Heroseo1 from '@/components/Heroseo1';
import Cardseo from '@/components/Cardseo';
import Sliderseo from '@/components/Sliderseo';
import Section2seo from '@/components/Section2seo';
import Section3seo from '@/components/Section3seo';





export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroseo1 />
    <Section3seo />
    <Section2seo />
    
    <Sliderseo />
    <Cardseo />
    
    <Video />
    <Card1 />
   
    <Footer/>
    </div>
  )
}
