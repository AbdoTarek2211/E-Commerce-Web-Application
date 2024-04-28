import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import "./contact.css";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";

function Contact() {
  return (
    <>
      <Meta props="Contact Us" />
      <BreadCrumb props={"Contact Us "} />
      <Container class1="contact_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-12 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.0545320645483!2d30.97282057500893!3d30.00659052036418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458575169329079%3A0xf8562fae56bf860f!2sMall%20of%20Arabia!5e0!3m2!1sen!2seg!4v1707586807286!5m2!1sen!2seg"
              height="450"
              className="border-0 w-100 "
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 mt-5">
            <div className="contact_inner_wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact_title mb-4">Contact </h3>
                <form action="" className="d-flex flex-column gap-20">
                  <CustomInput type="text" placeholder="Name" />
                  <CustomInput type="email" placeholder="Email" />
                  <CustomInput type="tel" placeholder="Mobile Number" />

                  <div>
                    <textarea
                      className="form-control w-100"
                      cols="30"
                      rows={"4"}
                      placeholder="Comments"
                    />
                  </div>
                  <div>
                    <button className="button border-0">submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact_title mb-4">Get in Touch with us</h3>
                <div className="contact_info">
                  <ul className="ps-0">
                    <li>
                      <FaHome className="fs-5" />
                      <address className="mb-0">
                        Mall of Arabia , October , Egypt
                      </address>
                    </li>
                    <li>
                      <IoIosCall className="fs-5" />
                      <a href="tel:+1234 567 891">+20 01123347691</a>
                    </li>
                    <li>
                      <IoMdMail className="fs-5" />
                      <a href="mailto example@gmail.com">example@gmail.com</a>
                    </li>
                    <li>
                      <FaInfoCircle className="fs-5" />
                      <p className="mb-0"> Monday - Friday 10 Am - 8 Pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
