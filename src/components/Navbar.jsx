"use client";

import { useState, useEffect, useRef } from "react"; // 1. Import useEffect and useRef
import { ChevronDown, Search, Globe, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null); // 2. Create a ref for the navbar

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Function to close menus
  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  // 3. useEffect to handle outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the navbar
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenus(); // Close all active menus
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]); // Dependency array: rerun if navbarRef changes (it won't, but standard practice)

  // A helper to toggle mobile menu and clear dropdown
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    setActiveDropdown(null); // Close dropdowns when opening/closing mobile menu
  };

  return (
    <nav
      ref={navbarRef} // 4. Attach the ref to the nav element
      className="bg-black text-white fixed top-0 w-full z-50 border-b border-gray-800"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/Images/vertical logo-01.png"
            alt="Logo"
            width="160"
            height="60"
            className="transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-1xl font-medium   tracking-wide">
          {[
            { label: "Marketing Services", id: "what-we-do" },
            { label: "Design", id: "design" },
            { label: "Our Work", id: "our-work", link: "/ow" },
            { label: "Who We Are", id: "who-we-are" },
          ].map((item) =>
            item.link ? (
              <Link
                key={item.id}
                href={item.link}
                className="relative group pb-1 hover:text-orange-400 transition"
                onClick={closeMenus} // Close menus on navigation for safety
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <div key={item.id} className="">
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className={`flex items-center space-x-1 pb-1 transition ${
                    activeDropdown === item.id
                      ? "text-orange-400 border-b-2 border-orange-500"
                      : "hover:text-orange-400"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Content */}
                {activeDropdown === item.id && (
                  // You might consider adding a role="menu" or similar for accessibility
                  <div className="absolute left-0 top-full p w-screen bg-[#1C1C1C] text-white pt-28 pb-10 px-20 shadow-2xl border-t border-gray-800">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-sm leading-relaxed">
                      {item.id === "what-we-do" && (
                        <>
                          <div>
                            <h3 className="text-orange-500 text-2xl   mb-3">
                              Marketing Services
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <Link
                                  href="/seo"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Search Engine Optimization
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/ppc"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Advertisement
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/smm"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Social Media Marketing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/cm"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Content Marketing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}

                      {item.id === "design" && (
                        <>
                          <div>
                            <h3 className="text-orange-500 text-2xl   mb-3">
                              Design Service
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <Link
                                  href="/ud"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  UX/UI Design
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/gd"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Graphic Designs
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/vd"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Video Editing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/cgi"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  CGI Ads
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}

                      {item.id === "who-we-are" && (
                        <>
                          <div>
                            <h3 className="text-orange-500 text-2xl   mb-3">
                              Company
                            </h3>
                            <ul className="space-y-2">
                              <li>
                                <Link
                                  href="/aboutus"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  About Us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/contactus"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  Contact Us
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/history"
                                  className="hover:text-orange-400"
                                  onClick={closeMenus} // Close menus on navigation
                                >
                                  History
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-orange-400 transition" onClick={closeMenus}>
            <Search className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("region")}
              className="flex items-center space-x-1 hover:text-orange-400 transition"
            >
              <Globe className="w-5 h-5" />
              <span className="  text-sm font-semibold">India</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "region" && (
              <div className="absolute right-0 mt-2 bg-[#1C1C1C] border border-gray-800 rounded-md w-32 py-2 shadow-lg">
                {["India", "USA", "UK"].map((r) => (
                  <a
                    key={r}
                    href="#"
                    className="block px-4 py-2 hover:text-orange-400"
                    onClick={closeMenus} // Close menus on selection
                  >
                    {r}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu} // Use the new helper function
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
{mobileOpen && (
  <div className="md:hidden bg-black border-t border-gray-800 py-4 px-6 space-y-4">
    {[
      {
        label: "Marketing Services",
        id: "marketing",
        links: [
          { label: "Search Engine Optimization", href: "/seo" },
          { label: "Advertisement", href: "/ppc" },
          { label: "Social Media Marketing", href: "/smm" },
          { label: "Content Marketing", href: "/cm" },
        ],
      },
      {
        label: "Design",
        id: "design",
        links: [
          { label: "UX/UI Design", href: "/ud" },
          { label: "Graphic Designs", href: "/gd" },
          { label: "Video Editing", href: "/vd" },
          { label: "CGI Ads", href: "/cgi" },
        ],
      },
      {
        label: "Our Work",
        href: "/ow",
      },
      {
        label: "Who We Are",
        id: "who",
        links: [
          { label: "About Us", href: "/aboutus" },
          { label: "Contact Us", href: "/contactus" },
          { label: "History", href: "/history" },
        ],
      },
    ].map((item) => (
      <div key={item.label}>
        {/* If it has sublinks */}
        {item.links ? (
          <div>
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === item.id ? null : item.id)
              }
              className="flex justify-between w-full items-center text-left hover:text-orange-400"
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === item.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Submenu */}
            {activeDropdown === item.id && (
              <div className="pl-4 mt-2 space-y-2 text-sm border-l border-gray-700">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:text-orange-400"
                    onClick={() => {
                      setMobileOpen(false); // close mobile menu
                      setActiveDropdown(null); // close submenus
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          // If it’s a single link
          <Link
            href={item.href}
            className="block hover:text-orange-400"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        )}
      </div>
    ))}
  </div>
)}

      
    </nav>
  );
}