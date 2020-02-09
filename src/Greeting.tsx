import React from "react";

type GreetingProps = {
  name: string;
  mark: string;
  optional?: string;
};

const Greetings = ({ name, mark, optional }: GreetingProps) => {
  const onClick = () => {
    console.log(`${name} says Hello`);
  };
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={onClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;
