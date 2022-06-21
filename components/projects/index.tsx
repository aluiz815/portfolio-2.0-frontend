import CardProject from "../CardProject";

export default function Projects() {
  return (
    <div className="font-poppins">
        <h1 className="text-center font-bold text-5xl text-rocket-700 mt-10 dark:text-white">Projetos</h1>
        <div className="flex justify-between mt-10 drop-shadow-3xl rounded-sm">
            <button className="dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-14 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white ">
                <h1>SALESFORCE</h1>
            </button>
            <button className="dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-16 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white">
                <h1>FRONT-END</h1>
            </button>
            <button className="dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-16 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white">
                <h1>BACK-END</h1>
            </button>
            <button className="dark:bg-rocket-700 dark:hover:bg-cyan-400 bg-gray-100 py-4 px-20 font-bold hover:drop-shadow-2xl transition-all delay-100 hover:bg-cyan-400 hover:text-white">
                <h1>MOBILE</h1>
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
