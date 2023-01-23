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
      <span style={{ backgroundColor: "#F00", paddingTop: 100 }}>1234</span>
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
          value={user.username}
          type="text"
          placeholder="Username"
        />{" "}
        <br />
        <input
          type="text"
          value={user.password}
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
        <br />
        <span>#Debug: {JSON.stringify(user)}</span>
      </form>
    </div>
  );
};

export default LoginPage;
