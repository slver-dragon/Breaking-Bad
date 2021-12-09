import React from "react";
import { shallow } from "enzyme";
// import { PersonSheet, PersonListContainer } from ".";
import PersonSheet from "./component";
// import PersonListContainer, { container } from "./container";

describe("Testing organism PersonSheet:", () => {
  let component = null;
  //   const onBtnClick = jest.fn();
  //   const onClickEnter = jest.fn();
  const setComponent = (props) => shallow(<PersonSheet {...props} />);
  // const setContainer = () => shallow(<PersonListContainer />);

  // test("container is rendering", () => {
  //   container = setContainer();
  //   console.log(container.debug())
  //   expect(container).toMatchSnapshot();
  // });

  test("component is rendering", () => {
    component = setComponent({character: {status: "Alive" }});
    expect(component).toMatchSnapshot();
  });

  test("status change", () => {
    component = setComponent({character: {status: "Alive"}});
    expect(component.find(".alive").length).toBe(1);
    component = setComponent({character: {status: "Deceased"}});
    expect(component.find(".deceased").length).toBe(1);
    component = setComponent({character: {status: "Presumed Dead"}});
    expect(component.find(".presumedDead").length).toBe(1);
  });

  test("error output", () => {
    component = setComponent({
      character: { status: "Alive" },
      errorValue: "Test error",
    });
    expect(component.find("ErrorMessage").length).toBe(1);
  });

  test("Loader output", () => {
    component = setComponent({
      character: { status: "Alive" },
      isLoading: true,
    });
    expect(component.find("Loader").length).toBe(1);
  });
});
