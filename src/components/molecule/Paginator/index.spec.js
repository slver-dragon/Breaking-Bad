import React from "react";
import { shallow } from "enzyme";
import Paginator from ".";

describe("Testing molecule Paginator:", () => {
  let component = null;
  const onBtnClick = jest.fn();
  const setComponent = (props) => shallow(<Paginator {...props} />);

  test("is rendering", () => {
    component = setComponent({
      pageElementCount: 10,
      cardsMaxCount: 63,
      currentPage: 2,
    });
    expect(component).toMatchSnapshot();
  });

  test("change page to left", () => {
    component = setComponent({ changePage: onBtnClick, currentPage: 2 });
    component.find(".pages").childAt(0).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  test("change page to right", () => {
    component = setComponent({ changePage: onBtnClick, currentPage: 2 });
    component.find(".pages").childAt(1).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  test("count pages calculate", () => {
    component = setComponent({
      pageElementCount: 10,
      cardsMaxCount: 63,
      currentPage: 2,
    });
    expect(component.find(".pages").children().length).toEqual(9);
  });

  test("pages list click", () => {
    component = setComponent({
      changePage: onBtnClick,
      pageElementCount: 5,
      cardsMaxCount: 63,
      currentPage: 6,
    });
    component.find(".active").at(0).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component.find("#CurrentPage").at(0).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component.find("#StartPage").at(0).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component.find("#EndPage").at(0).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component.find("#MultiDotFirst").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component.find("#MultiDotLast").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  test("NumberElement list click", () => {
    component = setComponent({ changeCount: onBtnClick, pageElementCount: 10 });
    component.find(".active").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
    component.find("#CountElement").at(0).simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  test("EndPage absent", () => {
    component = setComponent({
      changePage: onBtnClick,
      pageElementCount: 10,
      cardsMaxCount: 63,
      currentPage: 5,
    });
    expect(component.find("#EndPage").length).toEqual(0);
  });
});
