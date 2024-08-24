import "./countinfo.css"


import {Work, Group, MonetizationOn} from '@mui/icons-material';

export default function Countinfo() {
    return (
        <div className="count">
            <div className="countItem">
                <span className="countTitle">Clients</span>
                <div className="countDataContainer">
                    <span className="countData">675</span>
                    <Group className="countIcon"/>
                </div>
                <span class="subWrapper">
                    <span className="countSubtitle">Joined last month</span>
                    <span className="countSubData">
                        74
                    </span>
                    

                </span>

            </div>
            <div className="countItem">
                <span className="countTitle">Service Providers </span>
                <div className="countDataContainer">
                    <span className="countData">56</span>
                    <Work className="countIcon"/>
                </div>
                <span class="subWrapper">
                    <span className="countSubtitle">Joined last month</span>
                    <span className="countSubData">
                        12
                    </span>

                </span>

            </div>
            <div className="countItem">
                <span className="countTitle">Total Revenue</span>
                <div className="countDataContainer">
                    <span className="countData">$3543.50</span>
                    <MonetizationOn className="countIcon"/>
                </div>
                <span class="subWrapper">
                    <span className="countSubtitle">Revenue last month</span>
                    <span className="countSubData">
                        $390.25
                    </span>

                </span>

            </div>
        </div>
    );
}
