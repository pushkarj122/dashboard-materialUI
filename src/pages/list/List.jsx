import ServiceProviderDatatable from "../../components/serviceProviderDatatable/ServiceProviderDatatable"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./List.css"

import React from 'react'

const List = () => {
  return (
   
      <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="listContainer">
        <ServiceProviderDatatable />
      </div>
      </div>
      </>
  )
}

export default List
