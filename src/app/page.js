"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import AiQuote from "@/components/ai-quote"
import Logoslider from "@/components/Logoslider";
import Footer from "@/components/Footer";
import Customerreview from "@/components/Customerreview"
import Ourservices from "@/components/Ourservices"
import Ourser from "@/components/Ourser"
import Counter from "@/components/Counter";
import Gradienttext from "@/components/Gradienttext";
import MarqueeAnimation from "@/components/MarqueeAnimation"
import Section2landing from "@/components/Section2landing"



export default function Home() {
  return (
    <div >
      <main> 
        <Navbar/>
       
       
       <HeroBanner
        lines={["EVOKE DIGITAL : Where","Ideas Meet Digital Impact"]}
        description="New ways of working. New delivery models. Breakthrough intelligence. Delivering more effective, more efficient marketing – at speed and scale."
        ctaText="Get Started For Transform Your Business"
        ctaHref="/contactus" />
       
       <Ourservices/>
       <Section2landing />
       <Ourser/>
       <MarqueeAnimation />
       <Gradienttext />
       <Counter />
       <AiQuote/>
       <Logoslider />

       <Customerreview />
       <Footer/>
        </main>
       
    
    </div>
  );
}
