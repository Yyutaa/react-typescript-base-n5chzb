import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Row from "./Row";
import Reducer from "./Reducer";
import Ref from "./Ref";
import "./style.css";

interface AppProps {}

class App extends Component<AppProps> {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Reducer />
        <Ref />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
