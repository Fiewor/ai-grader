import React from "react";
import { Grid, Column, Form, Stack, TextInput, Button } from "@carbon/react";

const RegisterPage = () => {
  return (
    <Grid className="register-page" fullWidth>
      <Column lg={7} md={4} sm={2} className="register-page__left">
        <Form className="register-page__form">
          <Stack gap={7}>
            <TextInput labelText="Name" />
            <TextInput
              labelText="Email"
              helperText="This should preferrably be your institutional email address"
            />
            <TextInput
              labelText="Password"
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            />
            <Button type="submit">Register</Button>
          </Stack>
        </Form>
      </Column>
      <Column lg={7} md={4} sm={2} className="register-page__right"></Column>
    </Grid>
  );
};

export default RegisterPage;
