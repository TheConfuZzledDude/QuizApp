import ReactDOM from "react-dom";
import React from "react";

const App = () => {
  return <h1>Thi asdasds is my React app!</h1>;
};

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

ReactDOM.render(<App />, document.getElementById("app"));
