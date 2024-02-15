import React from "react";


function Navigation() {

    return (
        <>
            <div className="overlay overlay-slide-left" id="overlay">
                <nav>
                    <ul>
                        <li id="nav-1" className="slide-out-1 center">
                            <a href="./index.html" className="center">Home</a>
                        </li>
                        <li id="nav-2" className="slide-out-2 center">
                            <a href="./about.html" className="center">About</a>
                        </li>
                        <li id="nav-3" className="slide-out-3 center">
                            <a href="https://marjoleinbaas.pixieset.com/" target="_blank" className="center">Skills</a>
                        </li>
                        <li id="nav-4" className="slide-out-4 center">
                            <a href="mailto:marjoleinbaas@hotmail.com" className="center">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="hamburger-menu" id="hamburger-menu">
                <div className="menu-bar1"></div>
                <div className="menu-bar2"></div>
                <div className="menu-bar3"></div>
            </div>
        </>
    );
}

export default Navigation;