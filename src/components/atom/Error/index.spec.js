import React from "react";
import { shallow } from "enzyme";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Error from "../Error";

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
  
    test("Error rendering", () => {
      act(() => {
        shallow(<Error textError="Test Error" />, container);
      });
      expect(container.textContent).toBe("Test Error");
    });
  });
  