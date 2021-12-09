import React from "react";
import { shallow } from "enzyme";
import SearchPersons from ".";

describe("Testing molecule SearchPersons:", () => {
  let component = null;
  const onBtnClick = jest.fn();
  const onClickEnter = jest.fn();
  const setComponent = (props) => shallow(<SearchPersons {...props} />);

  test("is rendering", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });

  test("discard search value", () => {
    component = setComponent({ search: onBtnClick });
    component.find("#Clear").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  test("search run", () => {
    console.log(component.find("input").debug());
    component = setComponent({ search: onBtnClick });
    component.find("#Search").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    // component = mount(<SearchPersons search={onClickEnter} />);
    // component = setComponent({ search: onClickEnter });
    // component.find("input").simulate("keydown", { keyCode: 13});
    // expect(onClickEnter).toHaveBeenCalled();
  });
});