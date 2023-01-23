import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  return (
    <div>
      LoginPage
      <img src="src/assets/react.svg" sizes="100" />
      <h1 className="text-3xl font-bold underline bg-red-500 text-white w-[200px] rounded-3xl p-5">
        Hello world!
      </h1>
    </div>
  );
};

export default LoginPage;
