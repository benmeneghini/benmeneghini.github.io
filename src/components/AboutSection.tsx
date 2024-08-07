import {Info} from "../info/MyInfo";

const showDownloadSuccessMessage = () => {
    let alert = document.getElementById("suc-alert") as HTMLElement;
    let alertText = document.getElementById("suc-alert-text") as HTMLElement;
    alert.style.visibility = "visible";
    alertText.innerText = "Success! Downloading Resume"
    setTimeout(() => {
        alert.style.visibility = "hidden"
    }, 3000);
}

export const AboutSection = () => {
    const resumeFilename = "Ben-Meneghini-Resume.pdf";
    const pdfUrl = process.env.PUBLIC_URL + '/' + resumeFilename;
    return (
        <div className="pt-5">
            <h1 className="text-3xl">About</h1>
            <br/>
            <span>{Info.about_1}</span>
            <br/>
            <br/>
            <span>{Info.about_2}</span>
            <br />
            <br />
            <a href={pdfUrl} download={resumeFilename} target="_blank" rel="noopener noreferrer">
                <button onClick={showDownloadSuccessMessage} className="text-white rounded shadow p-2 mt-2
                hover:bg-neutral-50 hover:text-black bg-neutral-950">Download Resume</button></a>
        </div>
    )
}