import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"
import Team from '@/components/Team';
import Sectionaboutus from '@/components/Sectionaboutus';

import Section2aboutus from '@/components/Section2aboutus';
import Section3aboutus from '@/components/Section3aboutus';
import Section6aboutus from '@/components/Section6aboutus';


import React from 'react'



export function page() {
  return (
    <div>
        <Navbar/>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="/Images/p11.jpeg" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
  <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
    <div  className="aspect-1097/845 w-274.25 bg-linear-to-l from-black to-transparent opacity-90"></div>
  </div>
  <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
    <div  className="aspect-1097/845 w-274.25 bg-linear-to-tr from-black to-transparent opacity-20"></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
      <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8"> EVOKE DIGITAL, Collaboration isn’t a buzzword it’s our favorite strategy.
We partner with brands that crave bold ideas and measurable results, and we welcome teammates who love to challenge the ordinary.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Creativity with Purpose <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Transparency <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Collaboration <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Continuous Learning <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-white">Office</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">Coming Soon</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-white">Full-time colleagues</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">10+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-white">Hours per week</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">20+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-white">Paid time off</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
          
        </div>
      </dl>
    </div>
  </div>
</div>

   <Team />
   <Section3aboutus />
  
   <Sectionaboutus />
   <Section6aboutus />
      <Section2aboutus />

  
  <Footer/>
        
    </div>
  )
}

export default page