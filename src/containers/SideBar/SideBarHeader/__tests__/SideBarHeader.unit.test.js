import React from "react";
import { shallow } from "enzyme";
import { SideBarHeader } from "../SideBarHeader";

test("it renders SideBarHeader", () => {
  const wrapper = shallow(<SideBarHeader />);
  expect(wrapper).toMatchSnapshot();
});
