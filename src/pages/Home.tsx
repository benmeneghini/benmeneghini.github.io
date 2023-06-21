import 'uikit/dist/css/uikit.min.css';
import about from '../info/about';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="uk-flex uk-flex-center uk-flex-column uk-margin-top">
                <div className="uk-flex-top uk-width-1">
                    <h1 className="uk-text-bolder ">Hi, I'm Ben Meneghini</h1>
                </div>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m  uk-flex-bottom uk-margin-auto card-container">
                    <div className="uk-card-header ">
                        <h3 className="uk-card-title">About</h3>
                    </div>
                    {about()}
                </div>
            </div>
        </div>
    )
}
    
export default Home;