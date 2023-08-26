import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="flex flex-col justify-around my-auto py-3 w-40 h-screen fixed left-0 top-0 z-[1035]
        overflow-hidden bg-red-950 text-amber-50">
            <ul><li className={location.hash === '#about' || location.hash === '' || location.hash === '#main' ? "underline underline-offset-8" : ""}><a href="#about">About</a></li></ul>
            <ul><li className={location.hash === '#projects' ? "underline underline-offset-8" : ""}><a href="#projects">Projects</a></li></ul>
            <ul><li className={location.hash === '#contact' ? "underline underline-offset-8" : ""}><a href="#contact">Contact</a></li></ul>
        </nav>
    )
}
    
export default Navbar;