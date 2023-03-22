import React from 'react'
import { Login } from '../auth/Login'
import { SignUp } from '../auth/SignUp'
import AllDocument from './AllDocument'
import Home from './Home'
import { UploadDocuments } from './UploadDocuments'

export const Outlet = () => {
    return (
        <div
            class="bg-[url('https://www.mahanadicoal.in/images/pattern/p11.png')] ">

            {/* home component */}
            {/* <Home /> */}
            {/* mcl intranet_form */}
            <Login />
            <SignUp />
            {/* upload document */}
            <UploadDocuments />
            {/* document table */}
            {/* <AllDocument /> */}
            {/* mcl intranet_details */}
            {/* footer component */}
        </div>
    )
}
