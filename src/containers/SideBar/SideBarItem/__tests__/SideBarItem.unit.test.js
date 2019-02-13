import React from "react";
import { shallow } from "enzyme";
import { SideBarItem } from "../SideBarItem";

describe("SideBarItem", () => {
  test("it renders an empty SideBarItem", () => {
    const wrapper = shallow(<SideBarItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test('it renders SideBarItem with label="trending"', () => {
    const wrapper = shallow(<SideBarItem label="trending" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('it renders a SideBarItem with label="trending" and icon="fire"', () => {
    const wrapper = shallow(<SideBarItem icon="fire" />);
    expect(wrapper).toMatchSnapshot();
  });
});
