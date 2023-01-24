import React from "react";
import { Grid, Column, Form, Stack, TextInput, Button } from "@carbon/react";
import { Login } from "@carbon/react/icons";

const LoginPage = () => {
  return (
    <Grid className="login-page" fullWidth>
      <Column lg={7} md={4} sm={2} className="login-page__left">
        <Form className="login-page__form">
          <Stack gap={7}>
            <TextInput labelText="Name" />
            <TextInput labelText="Email" type="email" />
            <TextInput.PasswordInput
              labelText="Password"
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            />
            <Button role="button" type="submit" renderIcons={Login}>
              Login
            </Button>
          </Stack>
        </Form>
      </Column>
      <Column lg={7} md={4} sm={2} className="login-page__right"></Column>
    </Grid>
  );
};

export default LoginPage;
