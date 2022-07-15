import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import styled from "styled-components";
import { Heading, Form, FormSection, FormGroup, Button } from "./Register";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Heading>
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Login to continue</p>
      </Heading>

      <FormSection>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <label htmlFor="name">Username</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Register" className="login-button" />
          </FormGroup>
        </Form>
      </FormSection>
    </div>
  );
};
