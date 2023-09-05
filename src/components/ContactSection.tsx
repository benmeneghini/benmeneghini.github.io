import {Info} from "../info/MyInfo";
import {Link} from "react-scroll";
import {ChangeEvent, FormEvent, useState} from "react";
import sendEmail from "../services/sendEmail";


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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>, inputType: string) => {
        switch (inputType) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "message":
                setMessage(e.target.value);
                break;
        }
    }

    const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // if any are empty show danger alert
        if (name.length === 0 ||
            email.length === 0 ||
            message.length === 0) {
            let alert = document.getElementById("dan-alert") as HTMLElement;
            let alertText = document.getElementById("dan-alert-text") as HTMLElement;
            alert.style.visibility = "visible";
            alertText.innerText = "Please fill in all fields!"
            setTimeout(() => {
                alert.style.visibility = "hidden"
            }, 3000);

        } else {
            // email myself message
            await sendEmail(name, email, message);

            // reset inputs
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <div className="flex md:ml-40 justify-center bg-neutral-950">
            <div className="text-center text-amber-50 px-12 py-5 md:grid md:grid-cols-3 place-items-center">
                <h1 className="text-amber-50 text-3xl mb-12 md:col-span-9">Contact</h1>

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

                <div className="md:col-start-2 mt-12 mb-6">
                    <form onSubmit={sendMessage} className="bg-red-50 text-black p-3 md:p-5 rounded grid grid-cols-4 w-72 md:w-96">
                        <label className="text-start mb-1 col-span-2">Name:</label>
                        <label className="text-start ml-2 mb-1 col-span-2">Email:</label>

                        <input className="col-span-2 mr-2 bg-transparent outline outline-1 outline-offset-4 rounded"
                               type="text" id="name" name="name" placeholder="John Doe"
                               onChange={(e) => {handleInput(e, "name")}}
                               value={name}/>
                        <input className="col-span-2 ml-2 bg-transparent outline outline-1 outline-offset-4 rounded"
                               type="email" id="email" name="email" placeholder="johndoe@gmail.com"
                               onChange={(e) => {handleInput(e, "email")}}
                               value={email}/>

                        <label className="text-start col-span-4 mt-2 mb-1">Message:</label>
                        <input className="bg-transparent col-span-4 outline outline-1 outline-offset-4 rounded"
                                type="text" id="message" name="message" placeholder="Hey Ben, I'm John!"
                               onChange={(e) => {handleInput(e, "message")}}
                               value={message}/>

                        <button type="submit" className="bg-transparent border-2 border-black
                         rounded shadow hover:bg-black hover:text-white mt-5
                         col-span-2 col-start-2">Send Message</button>
                    </form>
                </div>

                <div className="md:col-start-2 mb-2 mt-6">
                    <button className="border-2 rounded shadow p-2 mt-2 hover:bg-white hover:text-black">
                        <Link className="flex items-center hover:cursor-pointer" to="hero" spy={true} smooth={true} duration={500}>Back to Top<svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
                    </svg></Link>
                    </button>
                </div>

            </div>
        </div>
    )
}