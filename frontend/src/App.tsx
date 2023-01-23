import React from "react";

type Props = {};

export default function App({}: Props) {
  // Typescript
  const tmp1 = "lek";
  const tmp2: string = "codemobiles";
  const tmp3: number = 2134;

  // JSX(TSX)
  return (
    <div>
      <button>{tmp1}</button>
      <button>{tmp2}</button>
      <button>{tmp3}</button>
    </div>
  );
}

type Sub1Props = {};

export default function Sub1({}: Sub1Props) {
  return <div>Sub1</div>;
}
