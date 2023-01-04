import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentWithInput from "./ComponentWithIput";
import { formatDate } from "./utils";
import "@testing-library/jest-dom";

// const tick = () => new Promise((res) => setImmediate(res));

describe("Test component with input", () => {
  describe("Test component with falsy value", () => {
    beforeAll(() => jest.useFakeTimers());
    afterAll(() => jest.useRealTimers());

    const falsyValues = [undefined, null, "", 0];
    test.each(falsyValues)(`Test component with falsy value '%p'`, (value) => {
      render(<ComponentWithInput input={value} />);
      const element = screen.getByTestId("component-with-input");
      expect(element.innerHTML).toEqual(formatDate(new Date()));
    });
    test("Test component if it count timer", async () => {
      render(<ComponentWithInput input="" />);
      const element = screen.getByTestId("component-with-input");

      const prevDate = new Date();
      jest.advanceTimersByTime(3000);
      const newDate = new Date();
      const data = element.innerHTML;
      expect(data).not.toEqual(formatDate(prevDate));
      expect(data).toEqual(formatDate(newDate));
    });
  });

  const arrayData = ["111", "222", "333", "444"];

  test("Test component with array data", () => {
    render(<ComponentWithInput input={arrayData} />);

    const element = screen.getByTestId("component-with-input");
    arrayData.forEach((data) => {
      expect(element).toContainHTML(data);
    });
  });

  describe("Test component with data", () => {
    test("Test component with string", () => {
      const stringData = "string data";
      render(<ComponentWithInput input={stringData} />);
      const element = screen.getByTestId("component-with-input");
      expect(element).toContainHTML(stringData);
    });

    test("Test component with integer", () => {
      const stringData = 12345;
      render(<ComponentWithInput input={stringData} />);
      const element = screen.getByTestId("component-with-input");
      expect(element).toContainHTML(stringData.toString());
    });

    test("Test component with object", () => {
      const stringData = { data1: "data1", data2: "data2" };
      render(<ComponentWithInput input={stringData} />);
      const element = screen.getByTestId("component-with-input");
      expect(element).toContainHTML(JSON.stringify(stringData));
    });
  });
});
