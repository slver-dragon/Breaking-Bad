import React from "react";
import { shallow } from "enzyme";
import CardList from "./component";
// import PersonListContainer from ".";

describe("Testing organism CardList:", () => {
  let component = null;
//   const onBtnClick = jest.fn();
//   const onClickEnter = jest.fn();
  const setComponent = (props) => shallow(<CardList {...props} />);
//   const setContainer = (props) => shallow(<PersonListContainer {...props} />);

  test("component is rendering", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });

//   test("container is rendering", () => {
//     component = setContainer();
//     expect(component).toMatchSnapshot();
//   });
});