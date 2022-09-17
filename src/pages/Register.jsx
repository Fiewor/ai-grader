import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

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

    if (password !== password2) {
      console.log("Passwords do not match");
      // toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        password2,
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
    <Container>
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
            <label htmlFor="name">Email</label>
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
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm your password"
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

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
`;
export const Heading = styled.section`
  width: 30%;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  height: 60%;
  width: 70%;
  font-size: 0.8rem;

  @media screen and (min-width: 768px) {
    width: 30%;
    font-size: 1rem;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  input {
    border-radius: 10px;
    border: solid 0.05px black;
    padding: 0.5rem;
    width: 60%;
  }
`;
export const Button = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
