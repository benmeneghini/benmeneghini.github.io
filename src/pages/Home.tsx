import {Info, Projects} from '../info/MyInfo';
import Navbar from '../components/Navbar';
import {isVisible} from "@testing-library/user-event/dist/utils";

const Home = () => {

    const toggleNav = () => {
        let navbar = document.getElementById("navbar");
        let menuIcon = document.getElementById("menuIcon");
        let closeIcon = document.getElementById("closeIcon");
        console.log("h")
        if (navbar !== null && menuIcon !== null && closeIcon !== null) {
            console.log("t")
            if (navbar.className === "invisible md:visible") {
                navbar.className = "";
                menuIcon.style.visibility = "hidden";
                closeIcon.style.visibility = "visible";
            } else {
                navbar.className = "invisible md:visible";
                menuIcon.style.visibility = "visible";
                closeIcon.style.visibility = "hidden";
            }
        }
    }

    return (
        <div className="bg-red-50 h-screen font-mono">
            <div id="navbar" className="invisible md:visible">
                <Navbar />
            </div>

            <div id="menuIcon" className="flex flex-col z-[1034] fixed m-2 top-0 left-0">
                <button onClick={() => {toggleNav()}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>
            </div>

            <div id="closeIcon" className="flex flex-col z-[1035] fixed ml-32 mt-2
             text-amber-50">
                <button onClick={() => {toggleNav()}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            <div id="main" className="bg-red-50 md:ml-40 px-12 py-5">
                <br/>
                <br/>
                <br/>

                <div id="about">
                    <span>{Info.about}</span>
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

                <div id="projects" className="carousel w-full">
                {/*    use the ProjectItems to make these from Projects list*/}

                {/*    <div id="slide1" className="carousel-item relative w-full">*/}
                {/*        <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />*/}
                {/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
                {/*            <a href="#slide4" className="btn btn-circle">❮</a>*/}
                {/*            <a href="#slide2" className="btn btn-circle">❯</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div id="slide2" className="carousel-item relative w-full">*/}
                {/*        <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />*/}
                {/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
                {/*            <a href="#slide1" className="btn btn-circle">❮</a>*/}
                {/*            <a href="#slide3" className="btn btn-circle">❯</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div id="slide3" className="carousel-item relative w-full">*/}
                {/*        <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />*/}
                {/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
                {/*            <a href="#slide2" className="btn btn-circle">❮</a>*/}
                {/*            <a href="#slide4" className="btn btn-circle">❯</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div id="slide4" className="carousel-item relative w-full">*/}
                {/*        <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />*/}
                {/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
                {/*            <a href="#slide3" className="btn btn-circle">❮</a>*/}
                {/*            <a href="#slide1" className="btn btn-circle">❯</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
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

            <div id="contact" className="flex md:ml-40 justify-center bg-neutral-950 h-full max-h-48 md:max-h-40">
                <div className="text-center text-amber-50 px-12 py-5 md:grid md:grid-cols-3 place-items-center">

                    <div className="font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="ml-2">{Info.email}</span>
                    </div>

                    <div className="inline-block w-0.5 self-stretch bg-amber-50 opacity-100 dark:opacity-50
                    invisible md:visible"></div>

                    <div className="font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span className="ml-2">{Info.number}</span>
                    </div>

                    <br/>

                    <div className="md:col-start-2 mb-2">
                        <button className="border-2 rounded shadow p-2"><a href="#main" className="flex items-center">Back to Top<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
                        </svg></a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
    
export default Home;