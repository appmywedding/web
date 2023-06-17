import Head from "next/head";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState.user) {
      Router.push("admin");
    } else {
      Router.push("login");
    }
  }, [authState.user]);

  return (
    <Head>
      <title>My Wedding</title>
    </Head>
  );
}
