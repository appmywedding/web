import React from 'react';
import Head from 'next/head'
import { logout as logoutFirebase } from '../../firebase';
import Router from 'next/router';
import Invited from '../../components/Invited';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';

export default function Home() {

    const dispatch = useDispatch();

    const onLogout = async () => {
        await logoutFirebase();
        dispatch(logout())
        Router.push('login');
    };

    const onSelectDJ = () => {
        Router.push('select/dj');
    };

    const onSelectDress = () => {
        Router.push('select/dress');
    };

    const onSelectHall = () => {
        Router.push('select/hall');
    };

    return (
        <div className="flex flex-row items-top min-h-screen py-2 bg-slate-50">
            <Head>
                <title>My Wedding</title>
            </Head>
            <div className='flex flex-col items-center'>
                <h1 className="mt-3 text-4xl cursor-pointer underline">
                    Your Invites
                </h1>
                <div className='h-5/6'>
                <Invited />
                </div>
            </div>
            <div className='flex mx-4 cursor-pointer text-xl h-full' onClick={onSelectHall}>
                Select your hall
            </div>
            <div className='flex mx-4 cursor-pointer text-xl h-full' onClick={onSelectDress}>
                Select your dress
            </div>
            <div className='flex mx-4 cursor-pointer text-xl h-full' onClick={onSelectDJ}>
                Select your dj
            </div>
            {/* <Items /> */}
            <div className="absolute left-10 bottom-10 cursor-pointer" onClick={onLogout}>
                {/* Logout */}
            </div>
        </div >
    )
}