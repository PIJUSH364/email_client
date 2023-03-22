import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import Footer from './Footer'

const ApplayOut = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default ApplayOut