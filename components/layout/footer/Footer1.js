/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
        <div className="footer__top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="footer__about">
                    <div className="footer__logo logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/secondary_logo.png"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <p>
                      GAMA Learning Institute, a subsidiary of GAMA Investments
                      Inc., is a premier provider of specialized Business and
                      Managerial Training in Saint Lucia and the Eastern
                      Caribbean.
                    </p>
                    <ul className="list-wrap m-0 p-0">
                      {/* <li className="address">463 7th Ave, NY 10018, USA</li> */}
                      <li className="number">+1-758-720-1919</li>
                      <li className="socials">
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Quick Links</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/courses">All Courses</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Contact Details</h4>
                  <ul className="list-wrap">
                    <li className=" font-bold text-white">
                      Gama Learning Institute
                    </li>
                    <li>
                      <Link href="#">Cnr Maurice Mason Ave L’Anse Rd</Link>
                    </li>
                    <br />
                    <li className=" font-bold text-white">Phone:</li>
                    <li>
                      <Link href="#">1-758-720-1919</Link>
                    </li>
                    <li className=" font-bold text-white">Email:</li>
                    <li>
                      <Link href="#">info@gamalearninginstitute.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Directory Links</h4>
                  <ul className="list-wrap">
                    <li>
                      <a
                        target="_blank"
                        href="https://yellow.place/en/gama-learning-institute-castries-stlucia"
                      >
                        Yellow Pages
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.findyello.com/st-lucia/gama-learning-institute/profile/"
                        target="_blank"
                      >
                        Yellow Pages 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.saintluciaindex.com/company/612/gama-learning-institute"
                        target="_blank"
                      >
                        Saint Lucia Index
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://startupspace.app/service-provider-detail/NzA1Ng=="
                        target="_blank"
                      >
                        Startup Space
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright__text">
                  <p>
                    Copyright © {new Date().getFullYear()} Gama Learning
                    Institute. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="copyright__menu">
                  <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
