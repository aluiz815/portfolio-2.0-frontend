import Image from "next/image";
import Profile from '../../assets/profile.jpeg'

export default function Me() {
  return (
   <>
     <section className="mt-28 flex items-center md:flex-row flex-col font-poppins font-bold text-3xl md:font-5xl">
       <div className="w-full text-center md:text-start">
        <p>
          Olá 👋,<br/>
          Meu nome é <br/>
          Andre Luiz <br/>
          Construo coisas no mundo Web/Mobile e Salesforce
          </p>
       </div>
        <div className="w-full flex justify-center">
          <div className="max-w-sm md:flex hidden">
            <Image className="rounded-full"  src={Profile} />
          </div>
        </div>
    </section>
  
   </>
  )
}
