import Tilt from "react-parallax-tilt";
import Image from "next/image";

const BannerSeven = (
    {
        title = "About us",
        subtitle = "Northbay Networks, Inc is a full service asset lifecycle company since 2000.  All of our different divisions offer the same services for the inspection, logistics, repossessions, valuation and disposition of idle assets, as well as being a source to procure newer assets for your growing companies. Our goal is to provide our clients with a one-source solution to their equipment lifecycle, as well as provide secure warehousing, logistics and staging for all their growing needs. Through our strategic partnerships we are able to provide our services over and above your typical remarketer or recycler. Our vertical approach ensures a knowledgable sale rep that can work with you to recover your original capital outlay and handle the cumbersome task of data destruction/wiping, shipping and proper recycling audit trails. Partnering with Northbay Networks, Inc. allows your business to streamline its lifecycle management, as well as to partake in creating an Green footprint for the world.",
        thumbnailImageOne = "/images/EndpointPics/backpack.jpg",
    }
) => {
    return (
        <div className="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30">
                        <div className="inner">
                            <h1 className="title">{title}</h1>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail text-start text-lg-end mb-5">
                            <div className="image-group text-end">
                                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                    <Image
                                        width={1417.2}
                                        height={1890.8}
                                        className="image-1 paralax-image"
                                        src={thumbnailImageOne}
                                        alt="Slider images"
                                    />
                                </Tilt>
                                
                            </div>
                            
                        </div>
                        {/* <div className="thumbnail text-start text-lg-end">
                            <div className="image-group text-end">
                                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                    <Image
                                        width={1417.2}
                                        height={945.4}
                                        className="image-1 paralax-image"
                                        src={thumbnailImageOne}
                                        alt="Slider images"
                                    />
                                </Tilt>
                                
                            </div>
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSeven;
