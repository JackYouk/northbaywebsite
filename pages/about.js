import Head from 'next/head';
import {useInView} from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import TeamOne from '../components/teams/TeamOne';
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import VideoPlayer from '../components/common/VideoPlayer';
import Image from 'next/image';
import SectionTitle from '../components/common/SectionTitle';


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [isWindow, setIsWindow] = useState(false);

    useEffect(() => {
        setIsWindow(true);
    }, []);

    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>

            <main className="page-wrapper">
                <Breadcrumb title="About Us" current="About Us"/>

                <BannerSeven/>

                <div className="axil-service-area ax-section-gap bg-color-white"  onS >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        title=""

                                        description=""
                                        color="extra08-color"
                                        alignment="center"
                                    />
                                </div>
                                <div className="axil-video-wrapper mt--60 mt_sm--30 mt_md--30">
                                    <div className="thumbnail position-relative">
                                        <Image
                                            width={1920}
                                            height={760}
                                            src="/images/bg/video-bg.png"
                                            alt="Video Bg Images"
                                        />
                                        <div className="video-button position-to-top">
                                            <a
                                                className="play__btn video-btn"
                                                href="https://www.youtube.com/watch?v=lIkkSAKaDoc"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                <span className="triangle" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isWindow && (
                        <VideoPlayer url="https://www.youtube.com/watch?v=lIkkSAKaDoc" />
                    )}

                <TeamOne/>
            </main>
        </Layout>
    );
};

export default About;
