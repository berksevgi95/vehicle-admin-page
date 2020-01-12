import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Container from '../components/container/Container'



export default {
    layout1: (routes) => (
        <div className="w-full h-full flex">
            <Sidebar>
                <Container>
                    <Header />
                    <div className="view">
                        {routes}
                    </div>
                </Container>
            </Sidebar>
        </div>
    ),
    layout2: (routes) => (
        <div className="w-full h-full flex">
            <Container horizontal>
                <Header horizontal />
                <div className="view-horizontal">
                    {routes}
                </div>
                {/* <div style={{height : 'calc(100% - 65px)'}}>

                </div> */}
            </Container>
        </div>
    )
}