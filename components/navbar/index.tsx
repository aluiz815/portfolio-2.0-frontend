import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/logo.svg';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {MdDarkMode,MdOutlineLightMode} from 'react-icons/md';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() =>{
    setMounted(true);
  },[])
  if(!mounted) return null;
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme ;


  return (
    <>
      <header className={`flex items-center justify-between ${isNavOpen ? "flex-col lg:flex-row":"flex-row"}`}>
        <Link href="/" >
          <Image src={Logo} alt="Logo A.J" className="cursor-pointer"/>
        </Link>
        <div className={`flex mt-2 ${isNavOpen ? "right-2":"right-0"} ${isNavOpen ? "top-16 animate-navTransition":"top-6 "}  absolute lg:hidden `} onClick={() => setIsNavOpen((prev) => !prev)}>
    {isNavOpen ? (
      <AiOutlineClose className="w-6 h-6 cursor-pointer"/>
    ):(
      <AiOutlineMenu className="w-6 h-6 cursor-pointer"/> 
    )}
  </div>
        <ul className={`font-dm-sans text-gray-600  flex lg:flex   ${isNavOpen ? "flex lg:flex-row animate-navTransition" : "hidden"} ${isNavOpen ? "flex-col" : "flex-row"}`}>
          <li className="mr-4 hover:text-cyan-400  hover:ease-linear delay-100 transition-all">
            <Link href="/about" >Sobre</Link>
          </li>
          <li className="mr-4 hover:text-cyan-400  hover:ease-linear delay-100 transition-all">
            <Link href="/tech">Tech Stack</Link>
          </li>
          <li className="mr-4 hover:text-cyan-400  hover:ease-linear delay-100 transition-all">
            <Link href="/projects">Projetos</Link>
          </li>
          <li className="mr-4 hover:text-cyan-400  hover:ease-linear delay-100 transition-all">
            <Link href="/contact">Contato</Link>
          </li>
          <li className="mr-4">
            <div className="flex items-center mt-1">
              <Link href="/github"><FaGithub className="hover:text-cyan-400  hover:ease-linear delay-100 transition-all cursor-pointer"/></Link>
              <Link href="/linkedin"><FaLinkedin className="ml-4 cursor-pointer hover:text-cyan-400  hover:ease-linear delay-100 transition-all"/></Link>
              <button className="ml-4" onClick={()=>setTheme(currentTheme === "light" ? "dark" : "light")}>{currentTheme === "dark" ? (<MdOutlineLightMode className="animate-navTransitionDarkMode"/>) : (<MdDarkMode className="animate-navTransitionDarkMode"/>)}</button>
            </div>
          </li>
        </ul>
       
      </header>
    </>
  )
}
