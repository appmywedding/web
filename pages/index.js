import Head from 'next/head'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../actions/auth';
import { auth } from '../firebase';
import firebaseClient from '../firebase';
import Router from 'next/router';

export default function Home() {

  const dispatch = useDispatch();

  async function checkAuth() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser({ user }));
        Router.push('/home')
      } else {
        Router.push('/login');
      }
    });
  }

  useEffect(() => {
    firebaseClient();
    checkAuth();
  });


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Wedding</title>
      </Head>
      <div className="mt-3 text-2xl">
        Herro
      </div>
    </div>
  )
}