import React from "react";

type Props = {};

export default function App({}: Props) {
  // Typescript
  const tmp1 = "lek";
  const tmp2: string = "codemobiles";
  const tmp3: number = 2134;

  let counter = 0;

  // JSX(TSX)
  return (
    <div>
      <button onClick={() => alert("Hey")}>ClickMe {counter}</button>
      <br />
      <br />
      <button>{tmp1}</button>
      <button>{tmp2}</button>
      <button>{tmp3}</button>
      <br />
      <Sub1 />
      <Sub2 />
      <Sub3 />
      <Sub4 />
      <MyComponent username="lek" password="1234" level="admin" />
    </div>
  );
}

type MyComponentProps = {
  username: string;
  password: string;
  level?: string;
};

const MyComponent = (props: MyComponentProps) => {
  return (
    <div>
      <h1>MyComponent</h1>
      <h3>Username: {props.username}</h3>
      <h3>Password: {props.password}</h3>
      <h3>Level: {props.level}</h3>
    </div>
  );
};

// fn(x,y) = x2+y2
const Sub2 = () => <h1>Sub2</h1>;

// variable function
const Sub4 = () => {
  const tmp = "Sub4";
  return <h1>{tmp}</h1>;
};

// body function
function Sub3() {
  return <h1>Sub3</h1>;
}

type Sub1Props = {};

export function Sub1({}: Sub1Props) {
  return <div>Sub1</div>;
}
