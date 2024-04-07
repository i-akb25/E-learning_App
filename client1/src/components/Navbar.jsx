import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header id="header">
                <nav>
                    <div className="logo">
<<<<<<< HEAD
                        <p>Adhayan</p>
=======
                        <p>ADHAYAN</p>
>>>>>>> a1e4e3fcefcae59881435ef1353b5f7693273434
                    </div>
                    <ul>
                        <li>
                            <a className="active" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                        <NavLink className="Link" to="/courses">
              COURSES
            </NavLink>
                        </li>
                        <li>
                            <a href="#contactus_section">Chat Room</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Discussion Forum</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Know Yourself</a>
                        </li>
                    </ul>
                    <div className="srch">
                        <input type="text" className="search" placeholder="Search here..." />
                        <img src="../images/icon/search.png" alt="search" onclick="slide()" />
                    </div>
                    <img
                        src="../images/icon/menu.png"
                        className="menu"
                        onclick="sideMenu(0)"
                        alt="menu"
                    />
                </nav>
            </header>

        </>
    )
}

export default Navbar