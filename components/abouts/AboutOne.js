import ContactFormOne from "../forms/ContactFormOne";

const AboutOne = () => {
  return (
    <div className="axil-about-us-area ax-section-gap bg-color-white axil-shape-position">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-12">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                
                <h2
                  className="title"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  About Us
                </h2>
                <p
                  className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Northbay Networks offers current, quality model 
                  equipment thats custom configured to your specifications. 
                  Our ITAD program offers our clients a 
                  convenient way to dispose of their idle or older technology through 
                  recycling for re-use, data management solutions including destruction 
                  and wiping, and state approved e-waste disposal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--30 mt_sm--30">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Get a quote now</h3>
                <ContactFormOne/>
                <div className="callto-action-wrapper text-center">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href="tel:+15109038999">(510) 903 8999</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-shape-group">
        <div className="shape shape-1">
          <i className="icon icon-shape-12"></i>
        </div>
        <div className="shape shape-2">
          <i className="icon icon-shape-03"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
