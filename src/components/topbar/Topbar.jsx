import React from 'react'
import "./topbar.css"
import {Notifications,Language,Settings} from '@mui/icons-material';
function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">LegalEaseAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <Notifications/>
                <span className="topIconBadge"> 12</span>
                </div>
                <div className="topbarIconContainer">
                <Language/>
                </div>
                <div className="topbarIconContainer">
                <Settings/>
                </div>
                <img className='topAccountImage' src='https://media.istockphoto.com/id/1311655328/photo/im-the-best-asset-in-my-business.webp?b=1&s=170667a&w=0&k=20&c=yQv7zPOkQXkEgEJbI7pq3v2ZAnG5znp3NRQKZL2tAqA=' alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Topbar
