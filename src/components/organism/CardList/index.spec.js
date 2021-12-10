import React from "react";
import { shallow } from "enzyme";
import CardList from "./component";

describe("Testing organism CardList:", () => {
  let component = null;
  const characters = [{char_id: 1}, {char_id: 2}];
//   const onBtnClick = jest.fn();
//   const onClickEnter = jest.fn();
  const setComponent = (props) => shallow(<CardList {...props} />);

  test("component is rendering as list", () => {
    component = setComponent({characters, isCardsList: true, errorValue: ''});
    expect(component).toMatchSnapshot();
  });
  test("component is rendering as grid", () => {
    component = setComponent({characters, isCardsList: false, errorValue: ''});
    expect(component).toMatchSnapshot();
  });
  test("error output", () => {
    component = setComponent({characters, errorValue: "Test error"});
    expect(component.find("ErrorMessage").length).toBe(1);
  });
  test("loading output", () => {
    component = setComponent({characters,  isCardsList: true, isLoading: true});
    expect(component.find("Loader").length).toBe(1);
  });
});