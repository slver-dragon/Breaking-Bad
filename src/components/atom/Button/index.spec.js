import React from "react";
import { shallow } from "enzyme";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Button from "../Button"

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
  
    test ("Button rendering ", () => {
      act(() => {
          shallow(<Button img="/" text="Test" />, container); 
      })
      expect()
      expect(container.textContent).toBe("Test");
      expect(container.getElementsByTagName('img')).not.toBeNull;
    })

    test ("Button empty rendering ", () => {
      act(() => {
        shallow(<Button />, container);
      })
      expect(container.textContent).toBeNull;
      expect(container.getElementsByTagName('img')).toBeNull;
    })
  });
  