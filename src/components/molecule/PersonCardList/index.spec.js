import React from "react";
import { shallow } from "enzyme";
import PersonCardList from ".";

describe("Testing molecule Paginator:", () => {
  let component = null;
  const setComponent = (props) => shallow(<PersonCardList {...props} />);

  test("is rendering", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });

  test("status change", () => {
    component = setComponent({ status: "Alive" });
    expect(component.find(".alive").length).toBe(1);
    component = setComponent({ status: "Deceased" });
    expect(component.find(".deceased").length).toBe(1);
    component = setComponent({ status: "Presumed Dead" });
    expect(component.find(".presumedDead").length).toBe(1);
  });
});