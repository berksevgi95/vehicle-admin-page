import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'


export default {
    layout1: (routes) => (
        <div className="w-full h-full flex">
            <Sidebar/>
            <div className="w-full h-full">
                <Header />
                <div className="view">
                    {routes}
                </div>
            </div>
        </div>
    ),
    layout2: (routes) => (
        <div className="w-full h-full">
            <Header horizontal />
            <div className="view-horizontal">
                {routes}
            </div>
        </div>
    )
}