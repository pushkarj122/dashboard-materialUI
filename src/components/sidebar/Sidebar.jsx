import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@mui/icons-material';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">

                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Clients
                        </li>
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Verified Service Provider
                        </li>
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Unverified Service Provider
                        </li>
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Rejected Service Provider
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Help
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}