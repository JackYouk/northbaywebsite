import Head from 'next/head';
import { useEffect, useState } from 'react';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import VideoPlayer from '../../components/common/VideoPlayer';
import Image from 'next/image';
import SectionTitle from '../../components/common/SectionTitle';
import ServiceOneOne from '../../components/services/ServiceOneOne';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";


const Services = () => {
    const [isWindow, setIsWindow] = useState(false);

    useEffect(() => {
        setIsWindow(true);
    }, []);


    return (
        <Layout>
            <Head>
                <title>Services</title>
            </Head>

            <main className="page-wrapper">
                <Breadcrumb title="Services" current="Services" />


                <div className="axil-service-area ax-section-gap bg-color-white" onS >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title="IT solutions tailored to your company's needs"

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
                                            href="https://www.youtube.com/watch?v=Pj_geat9hvI"
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

                <ServiceOneOne />

                <CallToActionOne />

            </main>
        </Layout>
    );
};

export default Services;