import Head from 'next/head'
import React, { useEffect } from 'react';
import Router from 'next/router';

export default function Home() {

  useEffect(() => {
    Router.push('login');
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Wedding</title>
      </Head>
    </div>
  )
}