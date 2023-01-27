import React from "react";
import {
  Grid,
  Column,
  Form,
  Stack,
  TextInput,
  Button,
  PasswordInput,
} from "@carbon/react";
import { Login } from "@carbon/react/icons";

const LoginPage = () => {
  return (
    <Grid className="login-page" fullWidth>
      <Column lg={7} md={8} sm={4} className="login-page__left">
        <Form className="login-page__form">
          <Stack gap={7}>
            <TextInput id="name" labelText="Name" />
            <TextInput id="email" labelText="Email" type="email" />
            <PasswordInput
              id="password"
              labelText="Password"
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            />
            <Button role="button" type="submit" renderIcon={Login}>
              Login
            </Button>
          </Stack>
        </Form>
      </Column>
      <Column lg={9} md={0} sm={0} className="login-page__right"></Column>
    </Grid>
  );
};

export default LoginPage;
