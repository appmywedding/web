import React, { useEffect } from 'react';
import Head from 'next/head'
import { logout } from '../../firebase';
import Router from 'next/router';
import axios from 'axios';

export default function Home() {

    const onLogout = async () => {
        await logout();
        Router.push('login');
    }

    useEffect(async () => {
        axios.get('http://localhost:3001/invites/getAll')
            .then((response) => {
                debugger;
            }, (error) => {
                debugger;
            });
    });

    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1 className="mt-3 text-4xl cursor-pointer underline">
                My Wedding
            </h1>
            <Head>
                <title>My Wedding</title>
            </Head>
            <div className="absolute left-10 bottom-10" onClick={onLogout}>
                Logout
            </div>
        </div>
    )
}