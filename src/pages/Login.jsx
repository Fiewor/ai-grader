import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {
  Container,
  Heading,
  Form,
  FormSection,
  FormGroup,
  Button,
} from "./Register";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
      // toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    // return <Spinner></Spinner>
  }

  return (
    <Container>
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
            <label htmlFor="email">Email</label>
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
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Register" className="login-button">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </FormSection>
    </Container>
  );
};
