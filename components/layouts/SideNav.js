import Link from 'next/link';
import Router from 'next/router';
import {useEffect} from 'react';

const SideNav = ({toggleSidenav}) => {
    const closeSideNav = () => {
        const html = document.querySelector("html"),
            sideNav = document.querySelector(".side-nav");

        sideNav.classList.remove("opened");
        html.classList.remove("side-nav-opened");
    };

    useEffect(() => {
        // Close sidenav while navigate to another page
        Router.events.on("routeChangeStart", closeSideNav);
        return () => {
            Router.events.off("routeChangeStart", closeSideNav);
        };
    }, []);

    return (
        <div className="side-nav">
            <div className="side-nav-inner">

                <div className="side-nav-content">
                    <div className="row ">
                        

                        <div className="col-lg-7 col-xl-6 col-12">
                            <div className="axil-contact-info-inner">
                                <div className="axil-contact-info">
                                    <address className="address">
                                        <span className="title">Address</span>
                                        <p>
                                            4080 Watts Street Emeryville, California
                                        </p>
                                    </address>
                                    <address className="address">
                                        <span className="title">
                                          Call/Fax
                                        </span>
                                        <p>
                                            <a className="tel" href="tel:+15109038999">
                                                <i className="fas fa-phone"/>
                                                (510) 903-8999
                                            </a>
                                        </p>
                                        <p>
                                            <a className="tel" href="tel:+15109038971">
                                                <i className="fas fa-fax"/>
                                                (510) 903-8971
                                            </a>
                                        </p>
                                    </address>
                                </div>

                                <div className="axil-contact-info">
                                    <h5 className="title">Social Media</h5>
                                    <div className="contact-social-share d-flex align-items-center">
                                        <ul className="social-share style-rounded">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-linkedin-in"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="close-sidenav" onClick={toggleSidenav}>
                    <button className="close-button">
                        <i className="fal fa-times"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
