import React, { useState } from 'react';
import styles from './navbar.module.css';
import SoundBar from '../../subComponents/SoundBar';

import { createGlobalStyle } from 'styled-components';

import { Link, NavLink } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

import Profile from '../../assets/Image/portrait.png';

const GlobalStyle = createGlobalStyle`
.active {
    font-weight: bold;
    color: #6d2ae2 !important;
    border-bottom: 3px solid #6d2ae2 !important;
}
`;


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);

    return (
        <>
            <GlobalStyle />
            <nav className={`${styles.navbar} navbar navbar-expand-lg sticky-top`}>
                <div className="container-fluid">
                    <Link className={`${styles.navbarBrand} navbar-brand fw-bolder me-4`} to="/">
                        <img src={Profile} alt="bhavya" width="30" height="30" className={`${styles.img} rounded-circle me-2`} />
                        <span>.bhavya</span>&lt;/&gt;
                    </Link>
                    <SoundBar className='soundbar' />
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            toggle ? <FaTimes /> : <FaBars />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav gap-1 ms-auto mb-2 mb-lg-0">
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} activeclassname='active' className={`${styles.navLink} nav-link`} aria-current="page" to="/">
                                    .is()
                                </NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/about">.about()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/education">.education()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/interest">.interest()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/skills">.skills()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/work">.work()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/experience">.experience()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/contact">.contact Me()</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;