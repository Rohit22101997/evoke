"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navbarRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    setActiveDropdown(null);
  };

  // --- Search feature logic ---
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Our Work", path: "/ow" },
    { name: "SEO & SEM", path: "/seo" },
    { name: "Paid Advertising", path: "/ppc" },
    { name: "Social Media Growth", path: "/smm" },
    { name: "Content Strategy", path: "/cm" },
    { name: "Web & App Design", path: "/ud" },
    { name: "Brand & Graphic Design", path: "/gd" },
    { name: "Video Production", path: "/vd" },
    { name: "Motion & CGI Ads", path: "/cgi" },
    { name: "History", path: "/history" },
    { name: "Performance Marketing", path: "/pm" },
  ];

  const filteredPages = searchQuery
    ? pages.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredPages.length > 0) {
      router.push(filteredPages[0].path);
      closeMenus();
    }
  };

  return (
    <>
    <style jsx global>{`
        .underline-anim {
          position: relative;
          display: inline-block;
        }
        .underline-anim::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 0%;
          background-color: #f97316;
          transition: width 0.3s ease-in-out;
        }
        .underline-anim:hover::after {
          width: 100%;
        }
      `}</style>
   
    <nav
      ref={navbarRef}
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
        <div className="hidden md:flex items-center space-x-8 text-1xl font-medium tracking-wide">
          {[
            { label: "Digital Marketing", id: "what-we-do" },
            { label: "Creative Studio", id: "Creative Studio" },
            { label: "Our Work", id: "our-work", link: "/ow" },
            { label: "About Us", id: "who-we-are" },
          ].map((item) =>
            item.link ? (
              <Link
                key={item.id}
                href={item.link}
                className="relative group pb-1 underline-anim transition"
                onClick={closeMenus}
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <div key={item.id}>
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
                  <div className="absolute left-0 top-full p w-screen bg-[#1C1C1C] text-white pt-28 pb-10 px-20 shadow-2xl border-t border-gray-800">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-sm leading-relaxed">
                      {item.id === "what-we-do" && (
                        <div>
                          <h3 className="text-orange-500 text-2xl mb-3 underline-anim">
                            Digital Marketing
                          </h3>
                          <ul className="space-y-2">
                            {[
                              { label: "SEO & SEM", href: "/seo" },
                              { label: "Paid Advertising", href: "/ppc" },
                              { label: "Social Media Growth", href: "/smm" },
                              { label: "Content Strategy", href: "/cm" },
                              { label: "Performance Marketing", href: "/pm" },
                            ].map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="underline-anim"
                                  onClick={closeMenus}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.id === "Creative Studio" && (
                        <div>
                          <h3 className="text-orange-500 text-2xl mb-3 underline-anim">
                            Creative Studio
                          </h3>
                          <ul className="space-y-2">
                            {[
                              { label: "Web & App Design", href: "/ud" },
                              { label: "Brand & Graphic Design", href: "/gd" },
                              { label: "Video Production", href: "/vd" },
                              { label: "Motion & CGI Ads", href: "/cgi" },
                            ].map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="underline-anim"
                                  onClick={closeMenus}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.id === "who-we-are" && (
                        <div>
                          <h3 className="text-orange-500 text-2xl mb-3 underline-anim">
                            About Us
                          </h3>
                          <ul className="space-y-2">
                            {[
                              { label: "Our Story", href: "/aboutus" },
                              { label: "Get in Touch", href: "/contactus" },
                              { label: "The Journey", href: "/history" },
                            ].map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="underline-anim"
                                  onClick={closeMenus}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
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
          {/* --- Search Button with Popup --- */}
          <div className="relative">
            <button
              className="hover:text-orange-400 transition"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* --- Search Input Overlay (positioned to the left of button) --- */}
            {searchOpen && (
              <div className="absolute right-full top-0 mr-2 bg-[#1C1C1C] border border-gray-700 rounded-md p-3 w-64 shadow-lg">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-orange-400 outline-none p-1 text-sm"
                  />
                </form>
                {filteredPages.length > 0 && (
                  <ul className="mt-2 space-y-1 text-sm">
                    {filteredPages.map((page) => (
                      <li key={page.path}>
                        <button
                          onClick={() => {
                            router.push(page.path);
                            closeMenus();
                          }}
                          className="w-full text-left hover:text-orange-400 transition"
                        >
                          {page.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {searchQuery && filteredPages.length === 0 && (
                  <p className="text-gray-400 text-sm mt-2">No results found.</p>
                )}
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
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
              label: "Digital Marketing",
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
              label: "About Us",
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
                            setMobileOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // If it's a single link
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
     </>
  );
}
