import { render, screen } from "@testing-library/react";
import { Tab } from "./Tab";
import userEvent from "@testing-library/user-event";

describe("Tab", () => {
  it("should render a button with the provided label", () => {
    render(<Tab id="1" label="Tab 1" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Tab 1");
  });

  it("should call the onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Tab id="1" label="Tab 1" onClick={onClick} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
