import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Formcontactus from "@/components/Formcontactus";
import Mapcontactus from "@/components/Mapcontactus";
import Herocontactus from "@/components/Herocontactus";
export default function page() {
  return (
    <div>
    <Navbar/>
    <Herocontactus />
    <Formcontactus />
    <Mapcontactus />
    

    <Footer/>
    </div>
  )
}
