import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./resetPassword.css";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../Features/User/UserSlice";

const passwordSchema = yup.object({
  password: yup.string().required("Password is Required"),
});

function ResetPassword() {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate("/login");
      formik.resetForm();
    },
  });

  return (
    <>
      <Meta props="Reset Password" />
      <BreadCrumb props={"Reset Password"} />
      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-3 mt-1 ">Reset Password</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit()}
                className="d-flex flex-column gap-15 p-1"
              >
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="New Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-20">
                    <button className="button border-0 btn_login">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ResetPassword;
