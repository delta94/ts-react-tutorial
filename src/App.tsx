import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greeting";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

const App = () => {
  const onSubimt = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubimt} />;
};

export default App;
