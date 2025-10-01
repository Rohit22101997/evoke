import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import  Card1 from '@/components/Card1';
import Heroseo1 from '@/components/Heroseo1';
import Section2seo from '@/components/Section2seo';
import Section3seo from '@/components/Section3seo';
import Section6seo from '@/components/Section6seo';
import Section7seo from '@/components/Section7seo';
import Section8seo from '@/components/Section8seo';
import Section9seo from '@/components/Section9seo';






export default function page() {
  return (
    <div>
    <Navbar/>
    <Heroseo1 />
    <Section3seo />
    <Section2seo />
    <Section8seo />
    <Section6seo />
     <Section7seo />
     <Section9seo />
    
    <Card1 />
   
    <Footer/>
    </div>
  )
}
