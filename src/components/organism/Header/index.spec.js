import React from "react";
import { mount } from "enzyme";
import Header from ".";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/catalog"
  }),
}));

describe("Testing organism Header:", () => {
  const component = mount(<BrowserRouter><Header /></BrowserRouter>);

  it("is rendering", () => {    
    expect(component).toMatchSnapshot();
  });
});
