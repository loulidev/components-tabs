import { render, screen } from "@testing-library/react";
import { TabsList } from "./TabsList";
import { Tab } from "../Tab/Tab";

describe("TabsList", () => {
  it("should render the children components", () => {
    render(
      <TabsList>
        <Tab id="1" label="Tab 1" />
        <Tab id="2" label="Tab 2" />
        <Tab id="3" label="Tab 3" />
      </TabsList>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });
});
