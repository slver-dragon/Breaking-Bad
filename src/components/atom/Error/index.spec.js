import React from "react";
import { shallow } from "enzyme";
import Error from "../Error";

describe("Error atom testing:", () => {
  test("Is render", () => {
    const component = shallow(<Error textError="Test Error" />);
    expect(component).toMatchSnapshot();
  });
});
