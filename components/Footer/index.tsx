import Image from "next/image";
import Logo from '../../assets/logo.svg'
import {FaHeart,FaGithub,FaLinkedin} from 'react-icons/fa';
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex justify-between items-center font-poppins mt-10">
        <Image src={Logo}/>
        <p className=" flex items-center font-bold ">Desenvolvido com &nbsp; <FaHeart/> &nbsp; por André Luiz </p>
        <div className="flex items-center mt-1">
            <Link href="/github"><FaGithub className="hover:text-cyan-400  hover:ease-linear delay-100 transition-all cursor-pointer"/></Link>
            <Link href="/linkedin"><FaLinkedin className="ml-4 cursor-pointer hover:text-cyan-400  hover:ease-linear delay-100 transition-all"/></Link>
        </div>
    </div>
  )
}
