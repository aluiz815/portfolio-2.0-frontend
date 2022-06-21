import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/logo.svg';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {MdDarkMode,MdOutlineLightMode} from 'react-icons/md';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])
  if(!mounted) return null;
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme ;


  return (
    <>
      <header className="flex items-center justify-between">
        <Link href="/" >
          <Image src={Logo} alt="Logo A.J" className="cursor-pointer"/>
        </Link>
        <ul className="flex font-dm-sans text-gray-600">
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
              <button className="ml-4 " onClick={()=>setTheme(currentTheme === "light" ? "dark" : "light")}>{currentTheme === "dark" ? (<MdOutlineLightMode/>) : (<MdDarkMode/>)}</button>
            </div>
          </li>
        </ul>
      </header>
    </>
  )
}
