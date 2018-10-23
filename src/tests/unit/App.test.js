import React from "react";
import {shallow} from "enzyme";
import App from "../../App";
import Router from "../../Router";
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Message from '../../components/common/message';


describe("Tests for App", () => {
  let component;

  beforeAll(() => {
    component = shallow(<App />);
  });

  it("checks that App contains Nav component", () => {
    expect(component.find(Nav).length).toBe(1);
  });

  it("checks that App contains Footer component", () => {
    expect(component.find(Footer).length).toBe(1);
  });

  it("checks that App contains Switch component", () => {
    expect(component.find(Router).length).toBe(1);
  });

  it("checks that App contains Message component", () => {
    expect(component.find(Message).length).toBe(1);
  });
});