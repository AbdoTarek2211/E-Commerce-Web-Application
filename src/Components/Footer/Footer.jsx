import React from "react";
import imageFooter from "../../assets/images/newsletter.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import "./footer.css";
import Container from "../Container/Container";

function Footer() {
  return (
    <>
      <Container class1="py-4 top_footer footer">
        <div className="row align-items-center ">
          <div className="col-5">
            <div className="footer_top_data d-flex align-items-center gap-15">
              <img src={imageFooter} alt="Footer Image" />
              <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
            </div>
          </div>
          <div className="col-7">
            <div class="input-group">
              <input
                type="text"
                className="form-control py-1 "
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text search_span p-2"
                id="basic-addon2"
              >
                Subcribe
              </span>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="py-4 footer">
        <div className="row">
          <div className="col-4">
            <h4 className="mb-4 text-white">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Location : Mall of Arabia , <br /> October , Egypt <br />
                PinCode : 131103
              </address>
              <a
                href="tel: +201123347691"
                className="mt-3 mb-1 text-white d-block "
              >
                +2 01123347691
              </a>
              <a href="mail to" className="mt-3 mb-4 text-white d-block ">
                abdallhagamal17@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30">
                <a className="text-white" href="#">
                  <FaFacebook className=" fs-5" />
                </a>
                <a className="text-white" href="#">
                  <FaGithub className=" fs-5" />
                </a>
                <a className="text-white" href="#">
                  <FaLinkedin className=" fs-5" />
                </a>
                <a className="text-white" href="#">
                  <FaYoutube className=" fs-5" />
                </a>
                <a className="text-white" href="#">
                  <FaInstagram className=" fs-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4 text-white">Information</h4>
            <div className="footer_links d-flex flex-column ">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">
                Refund Policy
              </Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Shipping Policy
              </Link>
              <Link to="/terms-conditions" className="text-white py-2 mb-1">
                Terms & Conditions
              </Link>
              <Link to="/blogs" className="text-white py-2 mb-1">
                Blogs
              </Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4 text-white">Account</h4>
            <div className="footer_links d-flex flex-column ">
              <Link className="text-white py-2 mb-1">About us </Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="mb-4 text-white">Quick Links</h4>
            <div className="footer_links d-flex flex-column ">
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="py-4 bottom_footer footer">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              Copyright : {new Date().getFullYear()} : powered by Abdullah Gamal
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;
