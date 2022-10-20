import Head from 'next/head';
import { useEffect, useState } from 'react';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import VideoPlayer from '../../components/common/VideoPlayer';
import Image from 'next/image';
import SectionTitle from '../../components/common/SectionTitle';
import WorkingProcess from '../../components/services/WorkingProcess';



const Ewaste = () => {
    const [isWindow, setIsWindow] = useState(false);

    useEffect(() => {
        setIsWindow(true);
    }, []);

    const process = {
        "title": "Asset Managment",
        "description": "Management of remote employee assets, onboarding, offboarding, and more",
        "strategies": [
          {
            "id": 1,
            "title": "Assetization and Managment",
            "subtitle": "",
            "description": "Every asset we receive is assetized and entered into our database.",
            "highlightColor": "",
            "image": "/images/itamlogo.png"
          },
          {
            "id": 2,
            "title": "Reimaging and Refurbishment",
            "subtitle": "",
            "description": "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
            "highlightColor": "",
            "image": "/images/process/process-02.jpg"
          },
          {
            "id": 3,
            "title": "Shipping and Logistics",
            "subtitle": "",
            "description": "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
            "highlightColor": "",
            "image": "/images/process/process-03.jpg"
          }
        ]
      };

    return (
        <Layout>
            <Head>
                <title>Asset Managment</title>
            </Head>

            <main className="page-wrapper">
                
            <WorkingProcess process={process}/>

            <div className="axil-service-area ax-section-gap bg-color-white"  onS >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        title="Asset Managment"

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
                        <VideoPlayer url="https://www.youtube.com/watch?v=Pj_geat9hvI" />
                    )}

                    

                    <CallToActionOne />
                    
            </main>
        </Layout>
    );
}; 

export default Ewaste;