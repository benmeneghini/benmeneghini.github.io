import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    const handleSetActiveSection = (section: string) => {
        setActiveSection(section);
    };

    return (
        <div>
            <nav className="flex flex-col justify-around my-auto py-3 w-40 h-screen fixed left-0 top-0 z-[1035] overflow-hidden bg-red-950 text-amber-50">
                <ul>
                    <li className={activeSection === 'about' ? 'underline underline-offset-8' : ''} id="about-link">
                        <Link
                            className="hover:cursor-pointer"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('about')}
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={activeSection === 'projects' ? 'underline underline-offset-8' : ''} id="projects-link">
                        <Link
                            className="hover:cursor-pointer"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('projects')}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={activeSection === 'contact' ? 'underline underline-offset-8' : ''} id="contact-link">
                        <Link
                            className="hover:cursor-pointer"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={() => handleSetActiveSection('contact')}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
