import {Info, Projects} from '../info/MyInfo';
import Navbar from '../components/Navbar';
import SuccessAlert from "../components/SuccessAlert";
import {Link} from 'react-scroll';
import {HeroSection} from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection";
import {ProjectSection} from "../components/ProjectSection";
import {ContactSection} from "../components/ContactSection";

const Home = () => {

    const toggleNav = () => {
        let navbar = document.getElementById("navbar") as HTMLElement;
        let menuIcon = document.getElementById("menuIcon") as HTMLElement;
        let closeIcon = document.getElementById("closeIcon") as HTMLElement;

        if (navbar.className === "invisible md:visible") {
            console.log("s")
            navbar.className = "";
            menuIcon.className = "visible md:invisible"
            closeIcon.className = "visible"
            // menuIcon.style.visibility = "hidden";
            // closeIcon.style.visibility = "visible";
        } else {
            navbar.className = "invisible md:visible";
            menuIcon.className = ""
            closeIcon.className = "invisible"
            // menuIcon.style.visibility = "visible";
            // closeIcon.style.visibility = "hidden";
        }
    }

    return (
        <div className="font-mono">
            <div className="flex justify-end">
                <SuccessAlert />
            </div>

            <div id="hero">
                <HeroSection />
            </div>

            <div id="navbar" className="invisible md:visible">
                <Navbar />
            </div>

            <div id="menuIcon" className="visible md:invisible">
                <div className="flex flex-col z-[1000] fixed m-2 top-0 left-0">
                    <button onClick={() => {toggleNav()}}><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </button>
                </div>
            </div>

            <div id="closeIcon" className="invisible">
                <div className="top-0 mt-2 z-[1035] fixed ml-32
                 text-amber-50">
                    <button onClick={() => {toggleNav()}}><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
            </div>

            <div id="main" className=" bg-red-50 md:ml-40 px-12 py-5 z-50">

                <br/>
                <hr/>
                <br/>

                <div id="about">
                    <AboutSection />
                </div>

                <br/>
                <hr/>
                <br/>

                {/*    temp breaks*/}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div id="projects">
                    <ProjectSection />
                </div>

                <br/>
                <hr/>
                <br/>

                {/*<div id="contact" className="h-screen bg-neutral-950">*/}
                {/*    */}
                {/*</div>*/}

            {/*    temp breaks*/}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>

            <div id="contact">
                <ContactSection />
            </div>
        </div>
    )
}
    
export default Home;