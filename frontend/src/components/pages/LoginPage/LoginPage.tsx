import * as React from "react";
import { useState } from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  // let user = { username: "", password: "" };
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <div>
      <form onSubmit={() => alert(JSON.stringify(user))}>
        <input
          onChange={(event) => {
            setUser({ username: event.target.value, password: user.password });
          }}
          type="text"
          placeholder="Username"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) => {
            user.password = event.target.value;
          }}
        />{" "}
        <br />
        <button type="submit">Submit</button> |
        <button
          type="button"
          onClick={() => {
            user.username = "";
            user.password = "";
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
