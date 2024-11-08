import React from "react";

const Topbar = ({ onNavigate }) => {
    return (
        <header className="mb-20 flex items-center justify-between py-3 text-3xl text-cyan-700">
            <a className="flex flex-shrink-0 items-center">My Portfolio</a>

            <nav className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="#home" onClick={() => onNavigate("home")}>Home</a>
                <a href="#about" onClick={() => onNavigate("about")}>About</a>
                <a href="#skills" onClick={() => onNavigate("skills")}>Skills</a>
                <a href="#contact" onClick={() => onNavigate("contact")}>Contact</a>
            </nav>
        </header>
    );
};
export default Topbar;
