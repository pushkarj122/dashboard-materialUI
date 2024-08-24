// Single.js

import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Single = () => {
  return (
      <>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Details</h1>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/1171169099/photo/man-with-crossed-arms-isolated-on-gray-background.jpg?s=1024x1024&w=is&k=20&c=STK0wru6a2H2DoiFprd3xdq2IKFS2P3_swZWrh0h9Mg="
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">6549985544</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">State:</span>
                  <span className="itemValue">Karnataka</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">Bengaluru</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">AECS Layout, Brookfield</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Pin :</span>
                  <span className="itemValue">560037</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Law School:</span>
                  <span className="itemValue">ABCD College Of Law</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Graduation Year:</span>
                  <span className="itemValue">2012</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Language:</span>
                  <span className="itemValue">English, Hindi, Kannada</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type Of Service Provider:</span>
                  <span className="itemValue">Advocate</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Areas Of Legal Practice:</span>
                  <span className="itemValue">Criminal Law, Family Law</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Legal Practitioner ID or Licence No:</span>
                  <span className="itemValue">M32F560037UYI</span>
                </div>

                
              </div>
            </div>
          </div>
          <div className="right">
            
            <div className="item">
              
              <div className="details">
                
                <div className="detailItem">
                  <span className="itemKey">License Picture: </span>
                  <span className="itemValue">
                    <img
                      className="licensePic"
                      src="https://media.istockphoto.com/id/1175538472/photo/man-holds-national-drivers-license-official-document-of-brazil-which-attests-the-ability-of-a.jpg?s=612x612&w=0&k=20&c=kuO44L3dZDIiMkE3NmFfDd_O00aIg18qqOB2RKm8D_k="
                      alt=""
                    />
                  </span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Law School Certificate: </span>
                  <span className="itemValue">
                    <img
                      className="licensePic"
                      src="https://media.istockphoto.com/id/1175538472/photo/man-holds-national-drivers-license-official-document-of-brazil-which-attests-the-ability-of-a.jpg?s=612x612&w=0&k=20&c=kuO44L3dZDIiMkE3NmFfDd_O00aIg18qqOB2RKm8D_k="
                      alt=""
                    />
                  </span>
                </div>

                <div className="cellAction">
                        <div className="acceptButton">Accept</div>
                        <div className="rejectButton">Reject</div>
                        <div className="deleteButton">Delete</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </>
      
    
  );
};

export default Single;
