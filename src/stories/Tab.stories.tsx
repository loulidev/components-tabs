import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "../components";
import { fn } from "@storybook/test";

const meta: Meta<typeof Tab> = {
  title: "Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    id: "1",
    disabled: false,
    children: "Tab 1",
    onClick: fn(),
    style: { listStyle: "none" },
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

export const Icon: Story = {
  args: {
    children: "Tab 1 🔥",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      value: "Tab 1 🔥",
    },
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
