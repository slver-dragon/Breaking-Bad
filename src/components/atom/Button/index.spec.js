import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button atom testing:", () => {
  let component = null;
  const setComponent = (props) => shallow(<Button {...props}/>);
  
  test("is render full", () => {
    component = setComponent({img:'./test.jpg', text:'Test message'});
    expect(component).toMatchSnapshot();
  });

  test("is render empty", () => {
    component = setComponent({img:'', text:''});
    expect(component).toMatchSnapshot();
  });
});
