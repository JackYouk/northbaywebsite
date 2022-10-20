import SectionTitle from '../common/SectionTitle';
import Link from 'next/link';

const CallToActionOne = () => {
    return (
        <div className="axil-call-to-action-area shape-position ax-section-gap theme-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-call-to-action">
                            <SectionTitle
                                title="Questions?"
                                subtitle=""
                                color="extra04-color"
                                alignment="center"
                            />
                            <div className="text-center">
                                <Link href="/contact">
                                    <a className="axil-button btn-large btn-transparent" >
                                        <span className="button-text">Ask us here</span>
                                        <span className="button-icon"/>
                                    </a>
                                </Link>
                                
                                <div className="callto-action">
                                    <span className="text">
                                      Or call us now
                                    </span>
                                    <span>
                                      <i className="fal fa-phone-alt"/>
                                      <a href="tel:+15105109038999">(510) 903 8999</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-01">
                    <i className="icon icon-shape-14"/>
                </div>
                <div className="shape shape-02">
                    <i className="icon icon-shape-09"/>
                </div>
                <div className="shape shape-03">
                    <i className="icon icon-shape-10"/>
                </div>
                <div className="shape shape-04">
                    <i className="icon icon-shape-11"/>
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;
