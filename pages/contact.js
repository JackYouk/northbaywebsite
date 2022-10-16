import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitle from "../components/common/SectionTitle";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";
import Image from "next/image";

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Us</title>
            </Head>

            <Breadcrumb title="Contact" current="Contact"/>

            <main className="main-wrapper">
                <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                                <div className="contact-form-wrapper">
                                    <div className="axil-contact-form contact-form-style-1">
                                        <h3 className="title">Get a quote now</h3>
                                        <ContactFormThree/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                                <div className="axil-address-wrapper">
                                    <div
                                        className="axil-address"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Phone</h4>
                                                <p>
                                                    Our hours of operation are 9am-5pm PST, Mon-Fri
                                                </p>
                                                <p>
                                                    <a className="axil-link" href="tel:+15109038999">
                                                        (510) 903 8999
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="axil-address mt--60 mt_sm--30 mt_md--30"
                                        data-aos="aos-fade-in-up"
                                        data-aos-duration="1000"
                                    >
                                        <div className="inner">
                                            <div className="icon">
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Email</h4>
                                                <p>
                                                    Our customer service team typically responds within 1-2 business days
                                                </p>
                                                <p>
                                                    <a
                                                        className="axil-link"
                                                        href="mailto:info@northbay-networks.com"
                                                    >
                                                        info@northbay-networks.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group">
                        <div className="shape shape-01">
                            <i className="icon icon-contact-01"/>
                        </div>
                        <div className="shape shape-02">
                            <i className="icon icon-contact-02"/>
                        </div>
                        <div className="shape shape-03">
                            <i className="icon icon-contact-03"/>
                        </div>
                    </div>
                </div>

                <div className="axil-office-location-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title="Office Locations"
                                    subtitle=""
                                    color="extra04-color"
                                    alignment="center"
                                />
                            </div>
                        </div>
                        <div className="row mt--30 d-flex justify-content-center">

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div
                                    className="axil-office-location mt--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="thumbnail">
                                        <Image
                                            width={300}
                                            height={180}
                                            src="/images/inner-image/contact/contact-01.jpg"
                                            alt="Location Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Emeryville CA</h4>
                                        <p>
                                            4080 Watts St. , <br/> United States
                                        </p>
                                        <a className="axil-button btn-transparent" href="#">
                                            <span className="button-text">View on Map</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Contact;
