import React from "react";
import Root from "../../../Root";
import {render} from "enzyme";
import RightSide from "../../../components/base/RightSite";


describe("RightSide", () => {
  let component;

  beforeEach(() => {
    component = render(Root(RightSide));
  });

  it("make sure that RightSide contains form element", () => {
    expect(component[0].name).toEqual("form");
  });

  it("make sure that RightSide contains select element", () => {
    expect(component.find("select").length).toBe(1);
  });

  it("make sure that RightSide contains button element", () => {
    expect(component.find("button").length).toBe(1);
  });
});