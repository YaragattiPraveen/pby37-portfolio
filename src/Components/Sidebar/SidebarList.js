import React from 'react'
import '../Sidebar/SidebarList.css'
import img from '../../Assests/profile-pic.png'
import { FcHome, FcNightPortrait, FcContacts, FcFactory, FcSalesPerformance, FcRating, FcGraduationCap } from "react-icons/fc";
import { Link } from 'react-scroll';

const SidebarList = ({ expandSidebar }) => {
    return (
        <>
            {
                expandSidebar ? (
                    <div className='navbar-items'>
                        <div className='sidebar-profile-pic'>
                            <img src={img} alt='profile-img' />
                        </div>

                        <ul>
                            <li className='nav-item'>
                                <Link to='Home'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcHome size={25} /> Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='About'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcNightPortrait size={25} /> About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Stack'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcRating size={25} /> Tech Stack
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Projects'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcSalesPerformance size={25} /> Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Workexperience'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcFactory size={25} /> Work Experience
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Education'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcGraduationCap size={25} /> Education
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Contacts'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcContacts size={25} /> Contact
                                </Link>
                            </li>
                        </ul>

                    </div>
                ) : (
                    <div className='navbar-items-only-icons'>
                        <ul>
                        <li className='nav-item'>
                                <Link to='Home'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcHome size={25} /> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='About'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcNightPortrait size={25} /> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Stack'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcRating size={25} /> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Projects'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcSalesPerformance size={25} /> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Workexperience'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcFactory size={25} /> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Education'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcGraduationCap size={25} /> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='Contacts'
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    offset={-100}>
                                    <FcContacts size={25} /> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            }

        </>
    )
}

export default SidebarList