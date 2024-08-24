import React from 'react'
import "./home.css"
import Countinfo from '../../components/countinfo/Countinfo'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

import WidgetLgLower from '../../components/widgetLgLower/WidgetLgLower'
import WidgetSmLower from '../../components/widgetSmLower/WidgetSmLower'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
function Home() {
  return (
    <>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <div className='home'>
      <Countinfo />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <div className='homeWidgetsLower'>
        <WidgetLgLower />
        <WidgetSmLower />
      </div>
    </div>

    </div>
    </>

    
  )
}

export default Home
