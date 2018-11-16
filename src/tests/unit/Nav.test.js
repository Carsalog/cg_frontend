import React from "react";
import {shallow} from "enzyme";
import Nav from '../../components/nav';
import UserNav from '../../components/common/userNav';


describe("Nav", () => {

  let component;

  beforeAll(() => {
    component = shallow(<Nav />);
  });

  it("checks that Nav contains logo", () => {
    expect(component.find('#logo').length).toBe(1);
  });

  it("checks that Nav contains UserNav component", () => {
    expect(component.find(UserNav).length).toBe(1);
  });
});