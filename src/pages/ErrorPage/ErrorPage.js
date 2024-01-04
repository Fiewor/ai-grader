import React from "react";
import { Grid, Column, ActionableNotification } from "@carbon/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Grid fullWidth className="">
      <Column lg={16} md={8} sm={4} className="error-page">
        <ActionableNotification
          title="Error"
          subtitle="Something went wrong."
          closeOnEscape
          inline={false}
          kind="error"
          timeout={5}
          actionButtonLabel="Go home"
          onActionButtonClick={() => navigate("/")}
        />
      </Column>
    </Grid>
  );
};

export default ErrorPage;
