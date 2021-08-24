import React from 'react'
import { Link } from 'react-scroll'

export default function NavItems({ drawerClose }) {
    return (
        <>
            <ul className="nav-ul">
                <li>
                    <Link to="skills"
                        onClick={() => drawerClose(false)}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        exact='true'
                        offset={-60}
                        duration={500}>
                        About
                        </Link>
                </li>
                <li>
                    <Link to="projects"
                        onClick={() => drawerClose(false)}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        exact='true'
                        duration={500}
                        offset={-30}
                    >
                        Work
                        </Link>
                </li>
                <li>
                    <Link to="contact"
                        onClick={() => drawerClose(false)}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        exact='true'
                        offset={-30}
                        duration={500}>
                        Contact
                        </Link>
                </li>
            </ul>
        </>
    )
}
