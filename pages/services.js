import Head from 'next/head';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import BannerSix from '../components/banners/BannerSix';
import CallToActionOne from '../components/call-to-actions/CallToActionOne';
import Layout from '../components/layouts/Layout';

const Services = () => {

    return (
        <Layout>
            <Head>
                <title>Services</title>
            </Head>

            <main className="page-wrapper">
                <BannerSix/>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default Services;