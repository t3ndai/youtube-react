import React from "react";
import { shallow } from "enzyme";
import { Subscription } from "../Subcription";

describe("Subscription", () => {
  it("renders empty Subscription", () => {
    const wrapper = shallow(<Subscription />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Subscription with broadcast", () => {
    const wrapper = shallow(<Subscription broadcast />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Subscription with amount of new vides = 30"', () => {
    const wrapper = shallow(<Subscription amountNewVideos={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
