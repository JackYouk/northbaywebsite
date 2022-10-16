import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import ServiceThree from '../components/services/ServiceThree';
import WorkingProcess from '../components/services/WorkingProcess';
import TeamOne from '../components/teams/TeamOne';
import CaseStudyData from '../data/CaseStudies.json';
import {slugify} from '../helpers/utilities';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven/>

                <TeamOne/>
            </main>
        </Layout>
    );
};

export default About;
