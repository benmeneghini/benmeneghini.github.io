import React from "react"
import { Link } from "react-scroll"

export const HeroSection = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex flex-col fixed z-[-30] md:ml-40 mt-12 px-12 text-5xl md:text-8xl text-start">
                <p>Ben</p>
                <p>Meneghini.</p>
            </div>
            <button className="border-2 absolute bottom-0 mb-2 w-fit ml-40 self-center rounded-full shadow p-2 mt-2 bg-white hover:bg-black hover:text-black">
                <Link className="flex items-center hover:cursor-pointer" to="about" spy={true} smooth={true} duration={500}><svg className="w-6 h-6 text-black hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                </Link>
            </button>
            <svg className="invisible md:visible h-screen fixed z-[-50] w-full" width="1440" height="560" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(&quot;#SvgjsMask1002&quot;)" fill="none">
                    <rect width="1440" height="560" x="0" y="0" fill="rgba(254, 242, 242, 1)"></rect>
                    <path d="M685.65 598.61C785.27 578.96 731.99 338.21 985.15 324.27 1238.3 310.33 1426.6 130.74 1584.14 128.27" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M652.58 594.76C751.45 562.98 688.19 293.55 919.82 276.72 1151.44 259.89 1315.44 126.97 1454.29 125.52" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M793.37 589.49C918.79 523.45 854.71 111.02 1090.66 106.68 1326.61 102.34 1530.4 278.52 1685.24 280.28" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M492.27 582.84C604.12 559.12 547.08 280.78 823.84 267.83 1100.6 254.88 1315.62 95.66 1486.99 94.23" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M378.35 667.71C482.51 661.62 450.98 477.59 746.18 470.51 1041.39 463.43 1289.61 248.97 1481.85 246.51" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1002">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>

            <svg className="visible md:invisible h-screen fixed z-[-50] bg-red-50" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(&quot;#SvgjsMask1007&quot;)" fill="none">
                    <rect width="1440" height="560" x="0" y="0" fill="rgba(254, 242, 242, 1)"></rect>
                    <path d="M921.78-45.65C806.64-18.2 862.28 280.6 588.58 290.71 314.87 300.82 91.11 402.32-77.83 402.71" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M847.93-91.55C723.09-27.84 788.84 377.33 549.43 382.99 310.01 388.65 105.4 249.42-47.58 248.59" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M803.67-80.46C667.75-72.77 564.71 174 322.35 174.2 79.99 174.4-33.66 35.61-158.97 34.2" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M1284.98-24.78C1097.48-20.02 959.67 238.97 585.99 247.77 212.3 256.57 73.18 501.31-113.01 505.37" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                    <path d="M697.15-89.61C582.74-56.13 651.4 250.13 380.85 267.23 110.3 284.33-88.12 433.81-251.75 435.23" stroke="rgba(69, 10, 10, 0.58)" strokeWidth={2}></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1007">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
        </div>
    )
}