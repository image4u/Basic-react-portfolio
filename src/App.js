import About from "./components/About";
import Navbar from "./components/Navbar";
import  Skills from "./components/Skills";
import Home from "./Home";
import Work from "./components/Work";
import Contact from "./components/Contact";



function App(){
  return(
    <div>
<Navbar/>
<Home/>
<About/>
<Skills/>
<Work />
<Contact />
    </div>
  )

}
export default App;