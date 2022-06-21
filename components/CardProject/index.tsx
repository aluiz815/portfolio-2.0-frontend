import Image from "next/image";
import ImageTest from '../../assets/imag.png'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import Link from "next/link";
export default function CardProject() {
  return (
    <div className="flex flex-col  rounded-b-lg font-poppins items-center justify-center mb-8 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <Image src={ImageTest} alt="plant" className="h-auto w-full"/>
    <div className="max-w-sm overflow-hidden rounded-b-xl bg-white">
      <div className="p-2">
        <p className="text-medium mb-5 text-gray-700">Project Tile goes here</p>
        <p className="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
        <div className="flex  items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer text-black mr-2 ">
              <FaGithub size={18} className="mr-1"/>
              <span className="rounded-md font-medium  py-2">See More</span>
            </div>
          </Link>
          <Link href="/">
              <div className="flex items-center cursor-pointer text-black ">
                <FaGithub size={18} className="mr-1"/>
                <span className="rounded-md font-medium  py-2">See More</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
