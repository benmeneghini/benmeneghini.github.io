import {Info, Projects} from '../info/MyInfo';
import Navbar from '../components/Navbar';
import SuccessAlert from "../components/SuccessAlert";
import {Link} from 'react-scroll';

const Home = () => {

    const toggleNav = () => {
        let navbar = document.getElementById("navbar") as HTMLElement;
        let menuIcon = document.getElementById("menuIcon") as HTMLElement;
        let closeIcon = document.getElementById("closeIcon") as HTMLElement;

        if (navbar.className === "invisible md:visible") {
            console.log("s")
            navbar.className = "";
            menuIcon.style.visibility = "hidden";
            closeIcon.style.visibility = "visible";
        } else {
            navbar.className = "invisible md:visible";
            menuIcon.style.visibility = "visible";
            closeIcon.style.visibility = "hidden";
        }
    }

    const copyToClipboard = (text: string) => {
        if (!window.isSecureContext) {return;}

        let alert = document.getElementById("suc-alert") as HTMLElement;
        let alertText = document.getElementById("suc-alert-text") as HTMLElement;

        navigator.clipboard.writeText(text)
            .then( () => {
                alert.style.visibility = "visible";
                alertText.innerText = "Copied to clipboard!"

                setTimeout(() => {
                    alert.style.visibility = "hidden"
                }, 3000);
                });
    }

    return (
        <div className="h-screen font-mono">
            <div id="top" className="h-full">
                <div className="flex flex-col fixed z-[-30] md:ml-40 px-12 text-5xl md:text-8xl text-start h-48 md:h-72 place-content-center">
                    <p>Ben</p>
                    <p>Meneghini.</p>
                </div>
                <svg className="invisible md:visible h-full fixed z-[-50]" width="1440" height="560" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    <g mask="url(&quot;#SvgjsMask1002&quot;)" fill="none">
                        <rect width="1440" height="560" x="0" y="0" fill="rgba(254, 242, 242, 1)"></rect>
                        <path d="M685.65 598.61C785.27 578.96 731.99 338.21 985.15 324.27 1238.3 310.33 1426.6 130.74 1584.14 128.27" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M652.58 594.76C751.45 562.98 688.19 293.55 919.82 276.72 1151.44 259.89 1315.44 126.97 1454.29 125.52" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M793.37 589.49C918.79 523.45 854.71 111.02 1090.66 106.68 1326.61 102.34 1530.4 278.52 1685.24 280.28" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M492.27 582.84C604.12 559.12 547.08 280.78 823.84 267.83 1100.6 254.88 1315.62 95.66 1486.99 94.23" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M378.35 667.71C482.51 661.62 450.98 477.59 746.18 470.51 1041.39 463.43 1289.61 248.97 1481.85 246.51" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1002">
                            <rect width="1440" height="560" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>

                <svg className="visible md:invisible h-full fixed z-[-50] bg-red-50" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    <g mask="url(&quot;#SvgjsMask1007&quot;)" fill="none">
                        <rect width="1440" height="560" x="0" y="0" fill="rgba(254, 242, 242, 1)"></rect>
                        <path d="M921.78-45.65C806.64-18.2 862.28 280.6 588.58 290.71 314.87 300.82 91.11 402.32-77.83 402.71" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M847.93-91.55C723.09-27.84 788.84 377.33 549.43 382.99 310.01 388.65 105.4 249.42-47.58 248.59" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M803.67-80.46C667.75-72.77 564.71 174 322.35 174.2 79.99 174.4-33.66 35.61-158.97 34.2" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M1284.98-24.78C1097.48-20.02 959.67 238.97 585.99 247.77 212.3 256.57 73.18 501.31-113.01 505.37" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                        <path d="M697.15-89.61C582.74-56.13 651.4 250.13 380.85 267.23 110.3 284.33-88.12 433.81-251.75 435.23" stroke="rgba(69, 10, 10, 0.58)" stroke-width="2"></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1007">
                            <rect width="1440" height="560" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>
            </div>

            <div id="navbar" className="invisible md:visible">
                <Navbar />
            </div>

            <div className="flex justify-end p-5">
                <SuccessAlert />
            </div>

            <div id="menuIcon" className="flex flex-col z-[1034] fixed m-2 top-0 left-0">
                <button onClick={() => {toggleNav()}}><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>
            </div>

            <div id="closeIcon" className="top-0 mt-2 z-[1035] fixed ml-32
             text-amber-50 visible md:invisible">
                <button onClick={() => {toggleNav()}}><svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            <div id="main" className="bg-red-50 md:ml-40 px-12 py-5 z-50">

                <br/>
                <hr/>
                <br/>

                <div id="about" className="pt-5">
                    <h1 className="text-2xl">About</h1>
                    <br/>
                    <span>{Info.about_1}</span>
                    <br/>
                    <br/>
                    <span>{Info.about_2}</span>
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
                    <h1 className="text-2xl">Projects</h1>
                    <br/>
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

            <div id="contact" className="flex md:ml-40 justify-center bg-neutral-950 h-full max-h-64 md:max-h-56">
                <div className="text-center text-amber-50 px-12 py-5 md:grid md:grid-cols-3 place-items-center">
                    <h1 className="text-amber-50 text-2xl mb-6 md:col-span-9">Contact</h1>

                    <div className="font-bold flex items-center hover:cursor-pointer" onClick={() => {copyToClipboard(Info.email)}}>
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="ml-2">{Info.email}</span>
                    </div>

                    <div className="inline-block w-0.5 self-stretch bg-amber-50 opacity-100 dark:opacity-50
                    invisible md:visible"></div>

                    <div className="font-bold flex items-center hover:cursor-pointer" onClick={() => {copyToClipboard(Info.number)}}>
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span className="ml-2">{Info.number}</span>
                    </div>

                    {/*<div className="md:col-start-3 bg-neutral-600">*/}
                    {/*    Test*/}
                    {/*</div>*/}

                    <div className="md:col-start-2 mb-2">
                        <button className="border-2 rounded shadow p-2 mt-2"><Link className="flex items-center hover:cursor-pointer" to="top" spy={true} smooth={true} duration={500}>Back to Top<svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
                        </svg></Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
    
export default Home;