import React from "react";
import { shallow } from "enzyme";
import Footer from ".";

describe("Testing organism Footer:", () => {
  test("is rendering", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});