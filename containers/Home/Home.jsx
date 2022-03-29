import React, { useEffect } from 'react';
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../firebase';
import Router from 'next/router';
import axios from 'axios';
import * as actions from '../../actions/invited';

export default function Home() {

    const invited = useSelector((reducers) => reducers.invited.invited)
    const dispatch = useDispatch();

    const onLogout = async () => {
        await logout();
        Router.push('login');
    }

    useEffect(async () => {
        axios.post('http://localhost:3001/invites/add')
            .then((response) => {
                dispatch(actions.setInvited(response.data));
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <Head>
                <title>My Wedding</title>
            </Head>
            <h1 className="mt-3 text-4xl cursor-pointer underline">
                My Wedding
            </h1>
            <div>
                <div className = "flex flex-col items-center">
                    <h3 className='p-5'>
                    {invited[0]?.name} : {invited[0]?.number}
                    </h3>
                    <h3 className='p-5'>
                    {invited[1]?.name} : {invited[1]?.number}
                    </h3>
                    <h3 className='p-5'>
                    {invited[2]?.name} : {invited[2]?.number}
                    </h3>
                    <h3 className='p-5'>
                    {invited[3]?.name} : {invited[3]?.number}
                    </h3>
                </div>
            </div>
            <div className="absolute left-10 bottom-10" onClick={onLogout}>
                Logout
            </div>
        </div>
    )
}