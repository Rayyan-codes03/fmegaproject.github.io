/** @format */

import React, { useState } from "react";
import Sdata from "./Sdata";

const Contact = () => {
  const [data, sData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    sData((preval) => {
      return {
        ...preval,

        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert(`
        ${data.fullname}
        ${data.phone}
        ${data.email}`);
  };
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputNumber" className="form-label">
                  Enter your number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputNumber"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your E-mail"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={data.password}
                  onChange={inputEvent}
                  placeholder="enter your password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
