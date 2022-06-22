import Image from "next/image";
import Profile from '../../assets/profile.jpeg'

export default function Me() {
  return (
   <>
     <section className="mt-28 flex items-center font-poppins font-bold text-3xl md:font-5xl">
        <section>
        Ola 👋,<br/>
        Meu nome é <br/>
        Andre Luiz <br/>
        Construo coisas no mundo Web/Mobile e Salesforce
        </section>
        <div className="max-w-sm hidden md:inline-block">
          <Image className="rounded-full"  src={Profile}/>
        </div>
    </section>
  
   </>
  )
}
