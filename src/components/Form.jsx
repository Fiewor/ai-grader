import React from "react";

export const Form = () => {
  return (
    <form action="/login" method="post">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className="login-input" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="login-input" />
      </div>
      <div>
        <input type="submit" value="Log In" className="login-button" />
      </div>
    </form>
  );
};
