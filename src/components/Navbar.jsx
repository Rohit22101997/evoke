"use client"

import { useState } from "react"
import { ChevronDown, Search, Globe } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-purple-500 text-2xl font-bold">
           
            
            <img src="./Images/vertical logo-01.png" alt="Girl in a jacket" width="216" height="108"></img>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("what-we-do")}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>Marketing Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "what-we-do" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2 z-50">
                <Link href="/seo" className="block px-4 py-2 hover:bg-gray-900">
                  Search Engine Optimization
                </Link>
                <Link href="/ppc" className="block px-4 py-2 hover:bg-gray-900">
                  Advertisement
                </Link>
                <Link href="/smm" className="block px-4 py-2 hover:bg-gray-900">
                  Social Media Marketing
                </Link>
                <Link href="/cm" className="block px-4 py-2 hover:bg-gray-900">
                  Content Marketing
                </Link>
              </div>
            )}
          </div>

          
          <div className="relative">
            <button
              onClick={() => toggleDropdown("careers")}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>Design</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "careers" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2 z-50">
                <a href="/ud" className="block px-4 py-2 hover:bg-gray-800">
                  UX/UI Design
                </a>
                <a href="/gd" className="block px-4 py-2 hover:bg-gray-800">
                  Graphic Designs
                </a>
                <a href="/vd" className="block px-4 py-2 hover:bg-gray-800">
                  Video Editing
                </a>
                <a href="/cgi" className="block px-4 py-2 hover:bg-gray-800">
                  CGI Ads
                </a>
              </div>
            )}
          </div>

          <a href="/ow" className="hover:text-gray-300 transition-colors">
           Our Work
          </a>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("who-we-are")}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>Who we are</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "who-we-are" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2 z-50">
                <a href="/aboutus" className="block px-4 py-2 hover:bg-gray-800">
                  About Us
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Team
                </a>
                <a href="/history" className="block px-4 py-2 hover:bg-gray-800">
                  History
                </a>
              </div>
            )}
          </div>

          
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("region")}
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>India</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "region" && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-gray-900 rounded-md shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  India
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  USA
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  UK
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
