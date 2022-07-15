import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
export const Heading = styled.section``;
export const Form = styled.form``;
export const FormSection = styled.section``;
export const FormGroup = styled.div``;
export const Button = styled.button``;

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    <Player
      autoplay
      loop
      mode="normal"
      src={process.env.REACT_APP_LOAD_SCREEN_ANIMATION_ONE}
      speed="1"
      // style={playerStyle}
    ></Player>;
  }
  return (
    <div>
      <Heading>
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </Heading>

      <FormSection>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="login-input"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="name">Username</label>
            <input
              type="email"
              id="email"
              name="email"
              value={name}
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
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm your password"
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
