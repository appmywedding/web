import React, { useEffect } from 'react'
import Router from 'next/router';
import { useSelector } from 'react-redux';

export default function Admin() {

    const user = useSelector((reducers) => reducers.auth.user);

    useEffect(() => {
        if (!user || !user.isAdmin) {
            Router.push('home');
        }
    }, [])

    const addDJ = () => Router.push('items/add/dj');

    return (
        <div className="flex flex-col items-center text-4xl ">
            Admin Panel
            <div className="border cursor-pointer" onClick={addDJ}>
                Add DJ
            </div>
        </div>
    )
}