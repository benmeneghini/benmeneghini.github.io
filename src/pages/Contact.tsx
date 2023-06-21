import Navbar from "../components/Navbar";
import { email, number } from "../info/contact";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="uk-flex uk-flex-center uk-flex-column uk-margin-top">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m  uk-flex-bottom uk-margin-auto card-container">
                    <div className="uk-card-header ">
                        <h3 className="uk-card-title">Contact</h3>
                    </div>
                    {email()}
                    {number()}
                </div>
            </div>
        </div>
    )
}
    
export default Contact;