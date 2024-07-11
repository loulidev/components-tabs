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
        <Tab id="1">Tab 1</Tab>
        <Tab id="2">Tab 2</Tab>
        <Tab id="3">Tab 3</Tab>
      </TabsList>
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      <TabPanel whenActive="3">Content for Tab 3</TabPanel>
    </Tabs>
  ),
};

export const Icon: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab id="1">
          Tab 1<span>🔥</span>
        </Tab>
        <Tab id="2">
          Tab 1<span>💧</span>
        </Tab>
        <Tab id="3">
          Tab 3<span>🌳</span>
        </Tab>
      </TabsList>
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      <TabPanel whenActive="3">Content for Tab 3</TabPanel>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab id="1">Tab 1</Tab>
        <Tab id="2" disabled>
          Tab 2
        </Tab>
        <Tab id="3">Tab 3</Tab>
      </TabsList>
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      <TabPanel whenActive="3">Content for Tab 3</TabPanel>
    </Tabs>
  ),
};

export const Scrollable: Story = {
  render: () => <div>Coming Soon...</div>,
};
