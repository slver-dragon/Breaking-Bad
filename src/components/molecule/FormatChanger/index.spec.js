import React from "react";
import { mount, shallow } from "enzyme";
import FormatChanger from "../FormatChanger"

describe("Testing molecule FormatChanger:", () => {
    let component = null;
    const onBtnClick = jest.fn();
    const setComponent = (props) => shallow(<FormatChanger {...props} />);

    test("is rendering", () => {
      component = setComponent();
      expect(component).toMatchSnapshot()
    });
  
    test("onClick works", () => {
      component = shallow(<FormatChanger exchangeCatalogFormat={onBtnClick} />);
      component.childAt(1).childAt(0).simulate("click");
      expect(onBtnClick).toHaveBeenCalled()
      component = shallow(<FormatChanger exchangeCatalogFormat={onBtnClick} />);
      component.childAt(1).childAt(1).simulate("click");
      expect(onBtnClick).toHaveBeenCalled()
    });

    test("output mode works", () => {
      component = mount(<FormatChanger isCardList="true" />);
      console.log(component)
      // expect(component).toMatchSnapshot()
    });
  });
  