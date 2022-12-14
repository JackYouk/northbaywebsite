import Tilt from "react-parallax-tilt";
import Image from "next/image";

const BannerSix = (
    {
        title = 'Services',
        subtitle = "IT solutions tailored to your company's needs",
        bannerStyleClass = 'axil-breadcrumb-area breadcrumb-style-2 pt--170 pb--70 theme-gradient',
        bannerTitleClass = 'page-title mb--20',
        leftColumn = 'col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30',
        rightColumn = 'col-lg-7 order-1 order-lg-2',
        bannerImageOne = '/images/EndpointPics/package.jpg',
        bannerImageTwo = '',
        shapeImage = '/images/slider/single-service-02.png',
        isServiceDetails = false,
        showPersonImage = false,
    }
) => {
    return (
        <div className={bannerStyleClass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={leftColumn}>
                        <div className="inner">
                            <div className="content">
                                <h1 className={bannerTitleClass}>{title}</h1>
                                <p className="subtitle-2">{subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className={rightColumn}>
                        {!isServiceDetails ? (
                            <div className="breadcrumb-thumbnail-group with-image-group text-start text-lg-end">
                                <div className="thumbnail">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                        <Image
                                            width={472.4}
                                            height={315.1}
                                            className="paralax-image"
                                            src={bannerImageOne}
                                            alt="Keystoke Images"
                                        />
                                    </Tilt>
                                </div>
                                
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <i className="icon icon-breadcrumb-1"/>
                                    </div>
                                    <div className="shape shape-2">
                                        <i className="icon icon-breadcrumb-2"/>
                                    </div>
                                    <div className="shape shape-3 customOne">
                                        <i className="icon icon-breadcrumb-3"/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="thumbnail text-start text-lg-end">
                                <div className="image-group">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                        <Image
                                            width={370}
                                            height={466}
                                            className="image-1 paralax-image"
                                            src={shapeImage}
                                            alt="Slider images"
                                            objectFit="cover"
                                        />
                                    </Tilt>
                                    {showPersonImage && (
                                        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9} className="banner-paralax-image-2">
                                            <Image
                                                width={270}
                                                height={321}
                                                className="image-2 paralax-image"
                                                src="/images/slider/single-service-01.svg"
                                                alt="Slider images"
                                                layout="fixed"
                                            />
                                        </Tilt>
                                    )}
                                </div>
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <i className="icon icon-breadcrumb-1"/>
                                    </div>
                                    <div className="shape shape-2">
                                        <i className="icon icon-breadcrumb-2"/>
                                    </div>
                                    <div className="shape shape-3 customOne">
                                        <i className="icon icon-breadcrumb-3"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSix;
