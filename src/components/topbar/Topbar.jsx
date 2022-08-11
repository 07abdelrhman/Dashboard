import React from 'react'
import "./topbar.css";
import {NotificationsNone ,Language,Settings} from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className='topbar'>

        <div className="topbarWarpper">
            <div className="topbarleft">
                <span className="logo">TMG</span>
            </div>
            <div className="topbarright">
                
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="TopIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Language/>
                    <span className="TopIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Settings/>
                   
                </div>
                <img className='topAvatar' src="assets/person/2.jpeg" alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}
 