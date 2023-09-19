import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

const Home = () => {
    // const [darkMode, setDarkMode] = useState(false);
    // function toggleDarkMode() {
    //     setDarkMode((prevDarkMode) => !prevDarkMode);
    // }
    return (
        <div className="bg-gradient-to-r from-purple-400  to-red-500">
            {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
        
            <NavBar/>
            <Hero/>
            <Skills/>
            <Work/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
