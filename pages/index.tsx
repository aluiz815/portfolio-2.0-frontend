import Footer from "../components/Footer"
import Me from "../components/me"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Stack from "../components/stack"

const IndexPage = () => (
  <div className="dark:bg-black py-6 px-16">
    <Navbar/>
    <Me/>
    <Stack/>
    <Projects/>
    <Footer/>
  </div>
)

export default IndexPage
