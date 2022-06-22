import Image from "next/image";
import ImageTest from '../../assets/imag.png'
import {FaGithub} from 'react-icons/fa';
import {ImLink} from 'react-icons/im';
import Link from "next/link";
export default function CardProject() {
  return (
    <div className="flex justify-center mt-10">
    <div className="rounded-md max-w-sm overflow-hidden shadow-lg rounded-t-2xl bg-white  duration-200 hover:scale-105 hover:shadow-xl">
      <div>
        <Image className="rounded-tr-2xl" src={ImageTest} alt=""/>
      </div>
      <div className="p-5">
      <p className="text-medium mb-5 text-gray-700">Project Tile goes here</p>
      <p className="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <Link href="/">
          <div className="flex items-center cursor-pointer text-black mr-2 ">
            <ImLink size={18} className="mr-1 w-3"/>
            <span className="whitespace-nowrap text-xs lg:text-sm rounded-md font-medium  py-2">Link Preview</span>
          </div>
        </Link>
        <Link href="/">
            <div className="flex items-center cursor-pointer text-black ">
              <FaGithub size={18} className="mr-1 w-3"/>
              <span className="whitespace-nowrap rounded-md font-medium text-xs  lg:text-sm py-2">View Code</span>
            </div>
          </Link>
      </div>
      </div>
    </div>
  </div>
  )
}
