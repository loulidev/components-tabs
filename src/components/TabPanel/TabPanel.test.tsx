import { render, screen } from "@testing-library/react";
import { TabPanel } from "./TabPanel";
import ActiveTabContext from "../../context/ActiveTabContext";

describe("TabPanel", () => {
  it("should render the children when the whenActive prop matches the activeId", () => {
    const activeId = "1";
    render(
      <ActiveTabContext.Provider value={[activeId, () => {}]}>
        <TabPanel whenActive="1">
          <div>Tab Content</div>
        </TabPanel>
      </ActiveTabContext.Provider>
    );

    const tabContent = screen.getByText("Tab Content");

    expect(tabContent).toBeInTheDocument();
  });

  it("should not render the children when the whenActive prop does not match the activeId", () => {
    const activeId = "1";
    render(
      <ActiveTabContext.Provider value={[activeId, () => {}]}>
        <TabPanel whenActive="2">
          <div>Tab Content</div>
        </TabPanel>
      </ActiveTabContext.Provider>
    );

    const tabContent = screen.queryByText("Tab Content");

    expect(tabContent).toBeNull();
  });
});
