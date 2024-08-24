import "./widgetLg.css"
function WidgetLg() {
    
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Unverified Service Providers</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Location</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Type</th>
                    <th className="widgetLgTh"></th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Akash Sinha</span>
                    </td>
                    <td className="widgetLgLocation">Patna</td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgType">Advocate</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButton">Verify</button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Seema Banerjee</span>
                    </td>
                    <td className="widgetLgLocation">Kolkata</td>
                    <td className="widgetLgDate">3 May 2021</td>
                    <td className="widgetLgType">Mediator</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButton">Verify</button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Abhishek Chauhan</span>
                    </td>
                    <td className="widgetLgLocation">Mumbai</td>
                    <td className="widgetLgDate">5 Aug 2022</td>
                    <td className="widgetLgType">Writer</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButton">Verify</button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Subhash Sharma</span>
                    </td>
                    <td className="widgetLgLocation">Delhi</td>
                    <td className="widgetLgDate">7 Dec 2023</td>
                    <td className="widgetLgType">Advocate</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButton">Verify</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
