import Head from 'next/head'
import React from "react";

export default function Home() {

    const name : number = 13;

  return (
    <>
      <Head>
        <h1>{name}</h1>
      </Head>
    </>
  )
}
