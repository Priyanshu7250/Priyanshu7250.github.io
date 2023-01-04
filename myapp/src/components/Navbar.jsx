
import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {

    const l = [
        {
            path: "/home", t: "Home"
        },
        {
            path: "/about", t: "About"
        },
        {
            path: "/contact", t: "Contact"
        },
        {
            path: "/project", t: "Project"
        },
        {
            path: "/skill", t: "Skill"
        },
        {
            path: "/resume", t: "Resume"
        }
    ]



    return (
        <>
            <div className='navbar'>
                {l.map((e) =>
                    <div>
                        <Link className='link'> {e.t} </Link>
                    </div>
                )}

            </div>
        </>
    )
}

export default Navbar