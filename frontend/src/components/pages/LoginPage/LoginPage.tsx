import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  let user = { username: "", password: "" };

  return (
    <div>
      <form onSubmit={() => alert(JSON.stringify(user))}>
        <input
          onChange={(event) => {
            user.username = event.target.value;
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
        <button type="button">Clear</button>
      </form>
    </div>
  );
};

export default LoginPage;
