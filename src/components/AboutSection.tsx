import {Info} from "../info/MyInfo";

export const AboutSection = () => {
    return (
        <div  className="pt-5">
            <h1 className="text-3xl">About</h1>
            <br/>
            <span>{Info.about_1}</span>
            <br/>
            <br/>
            <span>{Info.about_2}</span>
        </div>
    )
}