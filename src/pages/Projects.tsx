import Navbar from "../components/Navbar";

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h3 className="uk-card-title">Default</h3>
                <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}
    
export default Projects;