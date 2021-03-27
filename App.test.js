import React from "react";
import App from "./App";
import {
  fireEvent,
  render,
  waitFor,
  debug,
  spy,
} from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

test(<App/>, () => {
  const { debug } = render(<App />);
  debug();
});
