import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Container from '../components/container/Container'



export default {
    layout1 : (routes) => (
        <div className="w-full h-full flex">
            <Sidebar/>
            <Container>
                <Header />
                {routes}
            </Container>
        </div>
    ),
    layout2 : (routes) => (
        <div className="w-full h-full flex">
            <Container horizontal>
                <Header horizontal/>
                {routes}
            </Container>
        </div>
    )
}