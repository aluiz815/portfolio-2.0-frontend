import CardProject from "../CardProject";

export default function Projects() {
  return (
    <div className="font-poppins">
        <h1 className="text-center font-bold text-5xl text-rocket-700 mt-10 dark:text-white">Projetos</h1>
        <div className="flex justify-between flex-col lg:flex-row  mt-10 drop-shadow-3xl ">
            <button className="md:mb-10 mb-10 dark:rounded-md rounded-md dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-14 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white ">
                <h1 className="whitespace-nowrap">SALESFORCE</h1>
            </button>
            <button className="md:mb-10 mb-10 dark:rounded-md rounded-md dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-16 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white">
                <h1 className="whitespace-nowrap">FRONT-END</h1>
            </button>
            <button className=" md:mb-10 mb-10 dark:rounded-md rounded-md dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-16 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white">
                <h1 className="whitespace-nowrap">BACK-END</h1>
            </button>
            <button className=" md:mb-10 mb-10 dark:rounded-md rounded-md dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-20 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white">
                <h1 className="whitespace-nowrap">MOBILE</h1>
            </button>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-8">
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
        </div>
    </div>
  )
}
