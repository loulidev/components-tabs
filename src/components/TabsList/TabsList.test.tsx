import { render, screen } from "@testing-library/react";
import { TabsList } from "./TabsList";
import { Tab } from "../Tab/Tab";

describe("TabsList", () => {
  it("should render the children components", () => {
    render(
      <TabsList>
        <Tab id="1">
          <p>Tab 1</p>
        </Tab>
        <Tab id="2">
          <p>Tab 2</p>
        </Tab>
        <Tab id="3">
          <p>Tab 3</p>
        </Tab>
      </TabsList>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });
});
