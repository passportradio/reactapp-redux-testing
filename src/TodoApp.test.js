import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { render } from "./customRender";

import TodoApp from "./TodoApp";

test("should show status as done", async () => {
  const { debug, getByTestId } = render(<TodoApp />, {
    initialState: { todos: { status: "DONE" } }
  });

  await debug();

  expect(getByTestId("status")).toHaveTextContent("DONE");
});
