import React, { useState } from 'react'
import "../Sidebar/Sidebar.css"
import Home from '../Home/Home'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import SidebarList from './SidebarList'
import bgVideo from "../../Assests/Atoms.mp4"


const Sidebar = ({ theme, ChangeTheme }) => {

    const [expandSidebar, setExpandSidebar] = useState(false)

    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar)
    }
    return (
        <div className='container-fluid sidebar-section'>

            <div className={expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'}>
                <div className='icon-for-sidebar-expand-and-collapse'>
                    <p onClick={handleExpandClick}>

                        {expandSidebar ? <BsChevronLeft size={30} /> : <BsChevronRight size={30} />}

                    </p>
                </div>
                <SidebarList expandSidebar={expandSidebar} />
            </div>
            <div className='container'>
                <div className='home-section'>
                    <div className='video-sec'>
                        <video autoPlay muted loop src={bgVideo}></video>
                    </div>
                    <Home className="home-comp" theme={theme} ChangeTheme={ChangeTheme} />


                </div>
            </div>
        </div>
    )
}

export default Sidebar