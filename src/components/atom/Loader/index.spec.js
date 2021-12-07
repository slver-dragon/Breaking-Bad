import React from "react";
import { shallow } from "enzyme";
import Loader from "../Loader";

describe("Loader atom testing:", () => {
  test("Is render", () => {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
