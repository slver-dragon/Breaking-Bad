import React from "react";
import { shallow } from "enzyme";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Loader from "../Loader";

describe("Testing FormatChanger:", () => {
    let container = null;
  
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
  
    test("Loader rendering", () => {
      act(() => {
        shallow(<Loader />, container);
      });
      expect(container.childNodes).not.toBeNull;  
    });
  });
  