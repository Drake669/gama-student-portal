/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Banner1() {
  return (
    <>
      <section
        className="banner-area banner-bg"
        data-background="/assets/img/banner/banner_bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner__content">
                <img
                  src="/assets/img/banner/bshape_01.png"
                  alt="shape"
                  className="shape alltuchtopdown"
                />
                <img
                  src="/assets/img/banner/bshape_02.png"
                  alt="shape"
                  className="shape"
                />
                <span
                  className="sub-title"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  100% Satisfaction Guarantee
                </span>
                <h3
                  className="title tg-svg"
                  data-aos="fade-right"
                  data-aos-delay={400}
                >
                  Learn{" "}
                  <span className="position-relative">
                    <img
                      src="/assets/img/icons/title_shape.svg"
                      className="svg-icon"
                    />
                    Skills
                  </span>{" "}
                  From Our Top Courses
                </h3>
                <p data-aos="fade-right" data-aos-delay={600}>
                  Our carefully curated courses are designed to help you master
                  new skills and advance your career. Whether you are looking to
                  improve your professional abilities or explore new areas of
                  interest, our expert-led courses provide the knowledge and
                  tools you need to succeed.
                </p>
                <div
                  className="banner__btn-wrap"
                  data-aos="fade-right"
                  data-aos-delay={800}
                >
                  <div className="tg-button-wrap">
                    <Link href="/courses" className="btn tg-svg">
                      <span className="text">Explore Courses</span>
                      <img src="/assets/img/icons/btn-arrow.svg" />
                    </Link>
                  </div>
                  <div className="banner__phone">
                    <i className="flaticon-phone-call" />
                    <div className="number-info">
                      <span>Have any Question?</span>
                      <h6 className="number">
                        <Link href="tel:1-758-720-1919">1-758-720-1919</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner__images">
                <img
                  src="/assets/img/banner/banner_img.png"
                  alt="img"
                  className="main-img"
                />
                <img
                  src="/assets/img/banner/bshape_03.png"
                  alt="shape"
                  className="shape"
                  data-aos="fade-down-right"
                  data-aos-delay={1200}
                />
                <img
                  src="/assets/img/banner/bshape_04.png"
                  alt="shape"
                  className="shape"
                  data-aos="fade-right"
                  data-aos-delay={1200}
                />
                <img
                  src="/assets/img/banner/bshape_05.png"
                  alt="shape"
                  className="shape"
                  data-aos="fade-down-left"
                  data-aos-delay={1200}
                />
                <div className="banner__fact">
                  <div className="banner__fact-item">
                    <div className="icon">
                      <i className="flaticon-group" />
                    </div>
                    <div className="info">
                      <span>Total Students</span>
                      <h4 className="count">15K</h4>
                    </div>
                  </div>
                  <div className="banner__fact-item">
                    <div className="icon">
                      <i className="flaticon-graduation-cap" />
                    </div>
                    <div className="info">
                      <span>Complete Graduation</span>
                      <h4 className="count">34K</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
