import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greeting";

const App = () => {
  const onClick = (name: String) => {
    console.log(`${name} says Hello`);
  };
  return <Greetings name="React" mark="^_^" onClick={onClick} />;
};

export default App;
