import React from "react";
import { mount, shallow } from "enzyme";
import SearchPersons from ".";

describe("Testing molecule SearchPersons:", () => {
  let component = null;
  const onBtnClick = jest.fn();
  const onClickEnter = jest.fn();
  const setComponent = (props) => mount(<SearchPersons {...props} />);

  test("is rendering", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });

  test("discard search value", () => {
    component = setComponent({ search: onBtnClick });
    component.find("input").simulate('change', { target: { value: 'Walter White' } });
    component.find("#Clear").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  test("search run", () => {
    component = setComponent({ search: onBtnClick });
    component.find("input").simulate('change', { target: { value: 'Walter White' } });
    component.find("#Search").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component = setComponent({ search: onClickEnter });
    component.find("input").simulate("keydown", { keyCode: 13});
    expect(onClickEnter).toHaveBeenCalled();
  });
});
