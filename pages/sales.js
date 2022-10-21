import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitle from "../components/common/SectionTitle";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";
import Image from "next/image";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Us</title>
            </Head>

            <Breadcrumb title="Sales" current="Sales"/>

            <main className="main-wrapper">
   
                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default Contact;
