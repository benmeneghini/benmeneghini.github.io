import {Info} from "../info/MyInfo";
import {Link} from "react-scroll";


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
export const ContactSection = () => {
    return (
        <div  className="flex md:ml-40 justify-center bg-neutral-950 h-full max-h-64 md:max-h-56">
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

                <div className="md:col-start-2 mb-2 mt-2">
                    <button className="border-2 rounded shadow p-2 mt-2"><Link className="flex items-center hover:cursor-pointer" to="hero" spy={true} smooth={true} duration={500}>Back to Top<svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
                    </svg></Link>
                    </button>
                </div>

            </div>
        </div>
    )
}