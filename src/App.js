import React from "react";
import "./components/Style.css"
import About from "./components/About";
import Contact from "./components/Contact";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";



const App = () => {
    return(
        <div>
<Navbar/>
<Masthead/>
<Portfolio/>
<About/>
<Contact/>
<Footer/>
<Copyright/>

        </div>
    )
}
    
        
    

export default App;