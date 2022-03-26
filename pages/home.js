import Head from 'next/head'
import React, { useEffect } from 'react';
import { logout } from '../firebase';

export default function Home() {

    useEffect(() => {

    })

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>My Wedding</title>
            </Head>
            <div className="mt-3 text-2xl cursor-pointer" onClick={logout}>
                Logged In!
            </div>
        </div>
    )
}