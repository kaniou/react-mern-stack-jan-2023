import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username" /> <br />
        <input type="text" placeholder="Password" /> <br />
        <button type="submit">Submit</button> |
        <button type="button">Clear</button>
      </form>
    </div>
  );
};

export default LoginPage;
