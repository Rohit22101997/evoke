import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import  Card1 from '@/components/Card1';
import Video from '@/components/Video';
import Heroseo from '@/components/Heroseo';
import Cardseo from '@/components/Cardseo';
import Sliderseo from '@/components/Sliderseo';





export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroseo />
    
    <Sliderseo />
    <Cardseo />
    
    <Video />
    <Card1 />
   
    <Footer/>
    </div>
  )
}
