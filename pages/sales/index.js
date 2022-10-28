import Head from "next/head";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Layout from "../../components/layouts/Layout";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";

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
