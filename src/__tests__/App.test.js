import React from "react";
import ReactDOM from "react-dom";
// import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

// it("contains h2 of the title", () => {
//   render(<App />);
//   expect(screen.getByText("Email")).toBeInTheDocument();
// });
