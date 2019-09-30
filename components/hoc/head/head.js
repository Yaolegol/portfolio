import React from 'react'
import Head from 'next/head'

const HeadHOC = () => (
    <Head>
        <title>Home</title>
        <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>
);

export default HeadHOC;