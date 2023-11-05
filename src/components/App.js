import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./components/Heading.js";
import Input from "./components/InputQuery.js";
import SubHeading from "./components/SubHeading.js";
import Submit from "./components/SubmitButton.js";

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <SubHeading/>
      <Input/>
      <Submit/>
    </div>
  )
}


