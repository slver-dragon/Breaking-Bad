import React from "react";
import { shallow } from "enzyme";
import Header from ".";
import { useLocation } from "react-router";
import { MemoryRoute, Route } from "react-router-dom";

describe("Testing organism Header:", () => {
  const component = shallow(<Header />);
  const container = (component) =>
    render(
      <MemoryRouter initialEntries={["/Catalog"]}>
        <Route path="/Catalog">
          {component}
        </Route>
      </MemoryRouter>
    );

  test("is rendering", () => {
    useLocation.pathname = "/Home";
    console.log(container.debug());
    expect(component).toMatchSnapshot();
  });
});
