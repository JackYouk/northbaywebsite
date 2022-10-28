import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Link from "next/link";

const BannerOne = () => {
    return (
        <div className="axil-slider-area axil-slide-activation">
            <div
                className="axil-slide slide-style-default theme-gradient slider-fixed-height d-flex align-items-center paralax-area">
                <div className="container">
                    <div className="row align-items-center pt_md--60 mt_sm--60">
                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                            <div className="content pt_md--30 pt_sm--30">
                                <h1
                                    className="axil-display-1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    IT Solutions and Logistics on a Global Scale
                                </h1>
                                <p
                                    className="subtitle-3"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    Operations in 50+ countries.
                                    <br/> Trusted by the biggest names in tech.
                                </p>
                                <Link href="/services">
                                    <a className="axil-button btn-large btn-transparent"
                                       data-aos="aos-fade-in-up"
                                       data-aos-duration="1000"
                                       data-aos-delay="400">
                                        <span className="button-text">Learn more</span>
                                        <span className="button-icon"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 order-1 order-lg-2">
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            
                                            <Image
                                                width={500}
                                                height={630}
                                                src="/images/nbnlogo2.png"
                                                alt="Northbay Logo"
                                            />
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerOne;
