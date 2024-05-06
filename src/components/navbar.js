"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";
const Navbar = () => {
  const [openCloseMenu, setOpenCloseMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop === 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  
  const logotipo = '/images/wertmaster_logo.png' //logo del navbar
  
  const bg_color_scroll_false = 'bg-gradient-to-b from-indigo-950 to-blue-800	' //color inicial del navbar
  const font_color_scroll_false = 'text-slate-200' //color de texto inicial del navbar

  const bg_color_scroll_true = 'bg-[#F8FAFC]' //color al hacer scroll
  const bg_blur_scroll_true = 'bg-black opacity-90' //fondo transparente, en caso de ser requerido
  const font_color_scroll_true = 'text-[#F8FAFC]' //color del texto al hacer scroll


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  const menu = () => {
    if (openCloseMenu) {
      setOpenCloseMenu(false)
      return
    }
    setOpenCloseMenu(true);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 122; // Ajuste de desplazamiento (100px)
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
        });
    }
};

  return (
    <nav className={`transition duration-200 ease-in-out p-4 fixed top-0 w-full z-40 shadow-2xl
    ${!isScrolled ? `${bg_color_scroll_false} ${font_color_scroll_false}` : ""}
    ${isScrolled ? `${bg_blur_scroll_true} ${font_color_scroll_true}` : ""}`}>
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="flex items-center p-[16px] justify-between h-[90px] ">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold">
            <FaCreditCard className={`${isScrolled?font_color_scroll_true:font_color_scroll_false} text-4xl sm:text-7xl -rotate-12`} />
            { /* <img src={logotipo} alt="Descripción de la imagen" />*/ }
            </Link>
          </div>
          <div className="md:hidden block">
            <GiHamburgerMenu className={`${!isScrolled?font_color_scroll_true:font_color_scroll_false} z-50 fixed top-10 right-10 size-7`} onClick={menu} />
          </div>
          <div className='hidden md:block'>
            <div className="flex items-centerspace-x-[30px] md:ml-6">
              <div className='space-x-4 p-[8px]'>
                <a href="#home" className="nav-link mr-4 hover:text-white text-sm font-medium" onClick={(e) => { e.preventDefault(); setTimeout(() => scrollToSection("home"), 100); }}>
                  Home
                </a>
              </div>
              <div className='space-x-4 p-[8px]'>
                <a href="#utilities" className="nav-link mr-4 hover:text-white text-sm font-medium" onClick={(e) => { e.preventDefault(); setTimeout(() => scrollToSection("utilities"), 100); }}>
                  Utilities
                </a>
              </div>

              <div className='space-x-4 p-[8px]'>
                <a href="#about" className="nav-link mr-4 hover:text-white text-sm font-medium" onClick={(e) => { e.preventDefault(); setTimeout(() => scrollToSection("about"), 100); }}>
                  About
                </a>
              </div>
               <div className='space-x-4 p-[8px]'>
                <a href="#contact" className="nav-link mr-4  hover:text-white text-sm font-medium" onClick={(e) => { e.preventDefault(); setTimeout(() => scrollToSection("contact"), 100); }}>
                  Contact
                </a>
              </div>
              {/* Agrega más enlaces según sea necesario */}
            </div>
          </div>
          <div className={`sm:hidden ${!openCloseMenu?"hidden":""}`} id="navbarResponsive">
            <ul className={`navbar-nav ${!isScrolled?"bg-blue-800":"bg-black opacity-90"} text-slate-200 text-lg p-3 z-10 text-center mt-[115px] fixed w-full left-0 top-[5px] space-y-4`}>
             
              <li className="nav-item ">
              <a href="#home" className="nav-link mr-4 hover:text-white font-medium" onClick={(e) => { e.preventDefault(); setOpenCloseMenu(!openCloseMenu); setTimeout(() => scrollToSection("home"), 100); }}>
                  Home
                </a>
              </li>
              <li className='nav-item '>
              <a href="#utilities" className="nav-link mr-4 hover:text-white font-medium" onClick={(e) => { e.preventDefault(); setOpenCloseMenu(!openCloseMenu); setTimeout(() => scrollToSection("utilities"), 100); }}>
                  Utilities
                </a>
              </li>
              <li className='nav-item '>
              <a href="#about" className="nav-link mr-4 hover:text-white font-medium" onClick={(e) => { e.preventDefault(); setOpenCloseMenu(!openCloseMenu); setTimeout(() => scrollToSection("about"), 100); }}>
                  About
                </a>
              </li>
              <li className='nav-item '>
              <a href="/servicios" className="nav-link mr-4 hover:text-white font-medium" onClick={(e) => { e.preventDefault(); setOpenCloseMenu(!openCloseMenu); setTimeout(() => scrollToSection("contact"), 100); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
