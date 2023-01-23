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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(JSON.stringify(user));
        }}
      >
        <input
          onChange={(event) =>
            setUser({ ...user, username: event.target.value })
          }
          type="text"
          placeholder="Username"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />{" "}
        <br />
        <button type="submit">Submit</button> |
        <button
          type="button"
          onClick={(event) => {
            setUser({ username: "", password: "" });
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
