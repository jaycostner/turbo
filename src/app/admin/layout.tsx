"use client"
import { useSession } from 'next-auth/react';
import React from 'react';
import Login from 'src/components/admin-panel/Login';
import { useAppSelector } from 'src/redux/hooks';


const Layout = () => {

    const isLoading = useAppSelector(store => store.loadingReducer)
    const {data: session}= useSession()


    if (!session?.user){
        return <Login/>;
    }

    return <div>layout</div>

}

export default Layout;