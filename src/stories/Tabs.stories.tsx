import type { Meta, StoryObj } from "@storybook/react";
import { TabPanel, Tabs, Tab, TabsList } from "../components";

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
      <TabsList>
        <Tab id="1" label="Tab 1" />
        <span>🚀</span>
        <Tab id="2" label="Tab 2" />
        <Tab id="3" label="Tab 3" />
        <Tab id="4" label="Tab 4" />
      </TabsList>
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      <TabPanel whenActive="3">Content for Tab 3</TabPanel>
      <TabPanel whenActive="4">Content for Tab 4</TabPanel>
    </Tabs>
  ),
};
