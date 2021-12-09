import React from "react";
import { shallow } from "enzyme";
import FormatChanger from ".";

describe("Testing molecule FormatChanger:", () => {
  let component = null;
  const onBtnClick = jest.fn();
  const setComponent = (props) => shallow(<FormatChanger {...props} />);

  test("is rendering", () => {
    component = setComponent();
    expect(component).toMatchSnapshot();
  });

  test("onClick works", () => {
    component = setComponent ({exchangeCatalogFormat: onBtnClick});
    component.find('#PutListFormat').simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component = setComponent ({exchangeCatalogFormat: onBtnClick});
    component.find('#PutGridFormat').simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  // test("output mode works", () => {
  //   // const container = document.createElement("div");;
  //   act(() => {
  //     component = mount(<FormatChanger isCardList="true" />, container);
  //   });

  //   console.log(component);
  //   // expect(component).toMatchSnapshot()
  // });
});
