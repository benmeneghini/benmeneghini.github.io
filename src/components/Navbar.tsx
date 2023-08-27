import { Link } from 'react-scroll';

const Navbar = () => {

    const underlineLink = (id: string) => {
        const aboutLink = document.getElementById("about-link") as HTMLElement;
        const projectsLink = document.getElementById("projects-link") as HTMLElement;
        const contactLink = document.getElementById("contact-link") as HTMLElement;

        aboutLink.className = "";
        projectsLink.className = "";
        contactLink.className = "";

        let link = document.getElementById(id) as HTMLElement;
        link.className = "underline underline-offset-8";
    }

    return (
        <div>
            <nav className="flex flex-col justify-around my-auto py-3 w-40 h-screen fixed left-0 top-0 z-[1035]
            overflow-hidden bg-red-950 text-amber-50">
                <ul><li id="about-link">
                    <Link onClick={() => {underlineLink("about-link")}} className="hover:cursor-pointer" to="about" spy={true} smooth={true} duration={500}>About</Link></li></ul>
                <ul><li id="projects-link">
                    <Link onClick={() => {underlineLink("projects-link")}} className="hover:cursor-pointer" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li></ul>
                <ul><li id="contact-link">
                    <Link onClick={() => {underlineLink("contact-link")}} className="hover:cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li></ul>
            </nav>
        </div>
    )
}
    
export default Navbar;