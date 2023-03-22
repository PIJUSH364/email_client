import React from 'react'
import { Login } from '../auth/Login'
import AllDocument from './AllDocument'
import Home from './Home'
import { UploadDocuments } from './UploadDocuments'

export const Outlet = () => {
    return (
        <>

            {/* home component */}
            {/* <Home /> */}
            {/* mcl intranet_form */}
            <Login />

            {/* <SignUp /> */}
            {/* upload document */}
            <UploadDocuments />
            {/* document table */}
            {/* <AllDocument /> */}
            {/* mcl intranet_details */}
            {/* footer component */}
        </>
    )
}
