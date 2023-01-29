import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <p variant="h5">SignIn</p>
        <input
          id="enter-email"
          type="email"
          value={creds.email}
          placeholder="Enter Email"
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <input
          id="enter-password"
          type="password"
          placeholder="Enter Password"
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Link to="/forgot">Forgot Password ?</Link>
        <button type="submit">SignIn</button>
      </form>
    </>
  );
};

export default SignIn;
