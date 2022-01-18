import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../..";
import { useForm } from "react-hook-form";
import { loginEmailPassword, AuthForm, createUser, signOutButton, loginWithGoogle, forgotPassword } from "../../../api/auth";
import { auth } from "../../../firebase";
import RectangleButton, { RectBut } from "../../buttons/rectangle-button";
import { LOGIN_PAGE } from "../../routing/consts";
import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, makeStyles, createStyles, Theme } from "@material-ui/core";

const RecPassPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100vh;
  h3,
  h2 {
    /* display: flex;  */
    font-size: 15px;
    /* align-items: flex-end; */
    /* text-align: end; */
  }
  h3 {
    text-align: end;
    margin-top: 10px;
  }
`;

const RecPassInput = styled.input`
  display: flex;
  width: 100%;
  height: 45px;
  margin-top: 15px;
  padding-left: 15px;
  font-family: "Balsamiq Sans";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #f4f4f4;
  // background-clip: padding-box;
  border: 1px solid #1a9920;
  border-radius: 30px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: 0.5s padding-left;
  &:focus {
    padding-left: 20px;
  }
`;

const RecPassFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  h1 {
    /* margin-bottom: 100px; */
    font-weight: bold;
    color: green;
    font-family: "Balsamiq Sans";
    font-size: 50px;
    border-radius: 2px "solid";
    border-color: green;
    margin-bottom: 50px;
  }
  button {
    margin-top: 20px;
    width: 100%;
  }
  form {
    width: 80%;
  }
`;

const ErrorMessageDiv = styled.div`
  height: 20px;
`;

interface PassRecoveryForm {
  email: string;
}

const PassRecoveryValidSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
    // )
    .required("Enter valid email-id"),
  // password: Yup.string()
  //   // .matches(
  //   //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()])\S$/,
  //   //   // /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
  //   //   "One uppercase, one lowercase, one special character and no spaces"
  //   // )
  //   .min(8, "Must be min 6")
  //   .max(20, "Must be mx 20")
  //   // .required(
  //   //   "Please valid password. One uppercase, one lowercase, one special character and no spaces"
  //   // )
  //   .required("Required"),
  // // confirmPassword: Yup.string()
  // //     .required("Required")
  // //     .test("password-match", "Password musth match", function (value) {
  // //         return this.parent.password === value;
  // //     }),
});

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const { push } = useHistory();

  const handlePasswordRecovery = (email) => {
    return forgotPassword(email)
      .then((res) => {
        setEmail("");
        setTimeout((res) => {
          {
            res ? push("/login") : null;
          }
        }, 2000);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <RecPassPageDiv>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values: PassRecoveryForm, actions) => {
          // createNewUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={PassRecoveryValidSchema}
      >
        {(props: FormikProps<PassRecoveryForm>) => {
          const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props;
          return (
            <Form className="formik-form">
              <RecPassFormDiv>
                <h1>ChelFood</h1>
                <h2>Введите Email</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                  <Field
                    type="email"
                    className={`form-control text-field__input ${errors.email && touched.email ? " is-invalid" : ""}`}
                    placeholder="Email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      handleChange(e);
                    }}
                    value={email}
                  />
                  <ErrorMessageDiv>
                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <small className="text-danger">
                          <strong>{msg}</strong>
                        </small>
                      )}
                    />
                  </ErrorMessageDiv>
                  {/* <RecPassInput type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" /> */}

                  <RectBut type="submit" size="md" onClick={() => handlePasswordRecovery(email)}>
                    Reset
                  </RectBut>
                  <h3>
                    <Link to={LOGIN_PAGE} className="router-link">
                      или войдите
                    </Link>
                  </h3>
                </form>
              </RecPassFormDiv>
            </Form>
          );
        }}
      </Formik>
    </RecPassPageDiv>
  );
};

export default PasswordRecovery;
