import type { Meta, StoryObj } from "@storybook/react";
import { TabPanel, Tabs, Tab } from "../components";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { defaultActiveId: "1" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tab id="1" label="Tab 1" />
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <Tab id="2" label="Tab 2" />
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
    </Tabs>
  ),
};
