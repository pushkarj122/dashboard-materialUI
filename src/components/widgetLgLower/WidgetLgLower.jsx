import "./widgetLgLower.css"

function widgetLgLower() {
  return (
    <div className="widgetLgLower">
      <h3 className="widgetLgLowerTitle">Verified Service Providers</h3>
      <table className="widgetLgLowerTable">
        <tr className="widgetLgLowerTr">
          <th className="widgetLgLowerTh">Customer</th>
          <th className="widgetLgLowerTh">Location</th>
          <th className="widgetLgLowerTh">Date</th>
          <th className="widgetLgLowerTh">Type</th>
          <th className="widgetLgLowerTh"></th>
        </tr>
        <tr className="widgetLgLowerTr">
          <td className="widgetLgLowerUser">
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="widgetLgLowerImg"
            />
            <span className="widgetLgLowerName">Akash Sinha</span>
          </td>
          <td className="widgetLgLowerLocation">Patna</td>
          <td className="widgetLgLowerDate">2 Jun 2021</td>
          <td className="widgetLgLowerType">Advocate</td>
          <td className="widgetLgLowerStatus">
            <button className="widgetLgLowerButton">Details</button>
          </td>
        </tr>
        <tr className="widgetLgLowerTr">
          <td className="widgetLgLowerUser">
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="widgetLgLowerImg"
            />
            <span className="widgetLgLowerName">Seema Banerjee</span>
          </td>
          <td className="widgetLgLowerLocation">Kolkata</td>
          <td className="widgetLgLowerDate">3 May 2021</td>
          <td className="widgetLgLowerType">Mediator</td>
          <td className="widgetLgLowerStatus">
            <button className="widgetLgLowerButton">Details</button>
          </td>
        </tr>
        <tr className="widgetLgLowerTr">
          <td className="widgetLgLowerUser">
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="widgetLgLowerImg"
            />
            <span className="widgetLgLowerName">Abhishek Chauhan</span>
          </td>
          <td className="widgetLgLowerLocation">Mumbai</td>
          <td className="widgetLgLowerDate">5 Aug 2022</td>
          <td className="widgetLgLowerType">Writer</td>
          <td className="widgetLgLowerStatus">
            <button className="widgetLgLowerButton">Details</button>
          </td>
        </tr>
        <tr className="widgetLgLowerTr">
          <td className="widgetLgLowerUser">
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="widgetLgLowerImg"
            />
            <span className="widgetLgLowerName">Subhash Sharma</span>
          </td>
          <td className="widgetLgLowerLocation">Delhi</td>
          <td className="widgetLgLowerDate">7 Dec 2023</td>
          <td className="widgetLgLowerType">Advocate</td>
          <td className="widgetLgLowerStatus">
            <button className="widgetLgLowerButton">Details</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default widgetLgLower
