const { render } = require("@testing-library/react");
import React from "react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem/>", () => {
  const title = "santos";
  const url = "https://elpepe.com";
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
