import { render, screen } from "@testing-library/react";
import { Tabs } from "./Tabs";
import ActiveTabContext from "../../context/ActiveTabContext";
import userEvent from "@testing-library/user-event";
import { Tab } from "../Tab/Tab";
import { TabsList } from "../TabsList";

describe("Tabs", () => {
  it("should render the children components", () => {
    render(
      <Tabs defaultActiveId="1">
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </Tabs>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("should set the default active tab based on the defaultActiveId prop", () => {
    render(
      <Tabs defaultActiveId="2">
        <TabsList>
          <Tab id="1">
            <p>Tab 1</p>
          </Tab>
          <Tab id="2">
            <p>Tab 2</p>
          </Tab>
        </TabsList>
      </Tabs>
    );

    const tab1 = screen.getByText("Tab 1").parentElement;
    const tab2 = screen.getByText("Tab 2").parentElement;

    expect(tab1).not.toHaveClass("active");
    expect(tab2).toHaveClass("active");
  });

  it("should update the active tab when a tab is clicked", async () => {
    const user = userEvent.setup();

    render(
      <ActiveTabContext.Provider value={["1", () => {}]}>
        <Tabs defaultActiveId="1">
          <TabsList>
            <Tab id="1">
              <p>Tab 1</p>
            </Tab>
            <Tab id="2">
              <p>Tab 2</p>
            </Tab>
          </TabsList>
        </Tabs>
      </ActiveTabContext.Provider>
    );

    const tab1 = screen.getByText("Tab 1").parentElement;
    const tab2 = screen.getByText("Tab 2").parentElement;

    expect(tab1).toHaveClass("tab-button active");
    expect(tab2).toHaveClass("tab-button");

    await user.click(tab2!);
    expect(tab1).toHaveClass("tab-button");
    expect(tab2).toHaveClass("tab-button active");
  });
});
