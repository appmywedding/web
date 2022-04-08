import React from 'react';
import Head from 'next/head'
import { logout } from '../../firebase';
import Router from 'next/router';
import Invited from '../../components/Invited';
import Items from '../../components/items';
import { useSelector } from 'react-redux';

export default function Home() {

    const hiddenFileInput = React.useRef(null);
    const selectFile = () => hiddenFileInput.current.click();

    const onLogout = async () => {
        await logout();
        Router.push('login');
    }

    return (
        <div className="flex flex-row items-top min-h-screen py-2 bg-slate-50">
            <Head>
                <title>My Wedding</title>
            </Head>
            <div className='flex flex-col items-center'>
                <h1 className="mt-3 text-4xl cursor-pointer underline">
                    Your Invites
                </h1>
                <Invited />
            </div>
            <Items />
            <input
                type="file"
                ref={hiddenFileInput}
                // onChange={handleFileSelect}
                style={{ display: 'none' }}
            />
            <div className="absolute left-10 bottom-10" onClick={onLogout}>
                Logout
            </div>
        </div>
    )
}