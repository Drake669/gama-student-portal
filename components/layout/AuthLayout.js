/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function AuthLayout({ children }) {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 over">
      <div className="relative flex items-center justify-center py-12">
        <div className="absolute top-4 left-4">
          <Link href="/">
            <img src="/assets/img/logo/logo.png" alt="Logo" className="w-24" />
          </Link>
        </div>
        {children}
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center auth-bg">
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
  );
}

export default AuthLayout;
