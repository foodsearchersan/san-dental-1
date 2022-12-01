import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { HiPhone } from 'react-icons/hi'
import Navibar from "./Navibar";
import {FaFacebookSquare} from 'react-icons/fa'
import {BsYoutube, BsLinkedin} from 'react-icons/bs'
import {TbWorldDownload} from 'react-icons/tb'

import '../css/TopNav.css'
function TopNav() {
    return (
        <div>
            {/* ph number */}
            <div className="tpp_nav_ph_cont">
                <div className="ph_left">
                    <p><HiPhone className='nav_ph_icon' />+91 89391 11172</p>
                    
                    <p>apollodental@premolar.org</p>
                </div>
                <div className="ph_right">
                  <a href='https://www.youtube.com/@doctorprem/videos'><BsYoutube/></a>
                  <a href='https://www.linkedin.com/company/premolar-healthcare/'><BsLinkedin/></a>
                </div>
            </div>


            {/* navbar */}
            <div className="nav_home_cont">
                <div className="nav_main_home" >
                    <Navibar />
                </div>
            </div>
        </div>
    )
}

export default TopNav