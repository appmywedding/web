import Head from 'next/head'
import React, { useEffect } from 'react';
import Router from 'next/router';

export default function Home(props) {

  useEffect(() => {
    Router.push('login');
  })

  return (
    <Head>
      <title>My Wedding</title>
    </Head>
  );
}