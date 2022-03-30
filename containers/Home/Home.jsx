import React, { useEffect } from 'react';
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../firebase';
import Router from 'next/router';
import axios from 'axios';
import InvitedRow from '../../components/InvitedRow';
import Loading from '../../components/Loading';
import * as actions from '../../actions/invited';

export default function Home() {

    const invited = useSelector((reducers) => reducers.invited.invited)
    const dispatch = useDispatch();

    const onLogout = async () => {
        await logout();
        Router.push('login');
    }

    const addInvited = async () => {
        axios.post('http://localhost:3001/invites/add', {
            people: [{
                name: 'Orel1',
                number: '0543056286'
            }]
        })
            .then((response) => {
                debugger;
                let newInvited = [...invited];
                for (let i = 0; i < response.data.length; i += 1) {
                    newInvited.push(response.data[i]);
                }
                dispatch(actions.setInvited(newInvited));
            }, (error) => {
                console.log(error);
            });
    }

    useEffect(async () => {
        axios.get('http://localhost:3001/invites/getAll')
            .then((response) => {
                dispatch(actions.setInvited(response.data));
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-slate-50">
            <Head>
                <title>My Wedding</title>
            </Head>
            <h1 className="mt-3 text-4xl cursor-pointer underline font-varelaround">
                My Wedding
            </h1>
            {invited ?
                <div className="flex flex-col items-center">
                    {invited.map((person) => {
                        return (
                            <div className='p-2'>
                                <InvitedRow name={person.name} number={person.number} />
                            </div>
                        )
                    }
                    )}
                </div>
                : <Loading />}
            <div className='cursor-pointer' onClick={addInvited}>
                Add
            </div>
            <div className="absolute left-10 bottom-10" onClick={onLogout}>
                Logout
            </div>
        </div>
    )
}