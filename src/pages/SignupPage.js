import React, { useState, useEffect } from "react";
import useValidation from "../hooks/useValidation";
import ListErrors from "../components/ListErrors";
import API from "../APIsHelpers/API";

const SignupPage = props => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const { validate, errorArray } = useValidation();

  // const handlesignup = () => {
  //   validate(name,email,password,passwordConfirm)
  // }

  useEffect(() => {
    doSignup();
  }, [errorArray]);

  const doSignup = () => {
    if (errorArray && errorArray.length === 0) {
      API.UserSignup({
        name,
        email,
        password,
        passwordConfirm,
        role: "user"
      }).then(result => {
        // console.log(result)
        if (result.status === "success") {
          localStorage.token = result.token;
          props.updateUser(result.data.user);
        }
      });
    }
  };

  const handleValidation = () => {
    validate(name, email, password, passwordConfirm);
  };

  return (
    <div className="signuppage-container wrapper">
      {console.log("This is signup page")}
      <div className="signuppage-sub-1">
        <div className="signuppage-thanks">
          <h1>Thanks for joining!</h1>
        </div>
        <div className="signuppage-form-container">
          {errorArray ? <ListErrors errorArray={errorArray} /> : null}
          <label className="signuppage-form-label"> Name </label>
          <input
            className=""
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Enter name..."
          ></input>
          <br />
          <label className="signuppage-form-label"> Email</label>
          <input
            className=""
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Enter email..."
          ></input>
          <br />
          <label className="signuppage-form-label"> Password</label>
          <input
            className=""
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password..."
          ></input>
          <br />
          <label className="signuppage-form-label">
            {" "}
            Password Confirmation
          </label>
          <input
            className=""
            onChange={e => setPasswordConfirm(e.target.value)}
            type="password"
            placeholder="Re-enter password..."
          ></input>
          <br />
          <button
            className="signuppage-button-login"
            onClick={() => handleValidation()}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
