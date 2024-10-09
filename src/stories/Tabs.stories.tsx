import type { Meta, StoryObj } from "@storybook/react";
import { TabPanel, Tabs, Tab, TabsList } from "../components";
import { TabsProps } from "../components/Tabs/Tabs";

// Custom interface extending TabsProps for Storybook demonstration purposes
interface TabsStoryProps extends TabsProps {
  tab1: string;
  tab2: string;
  tab3: string;
  disabledTab1: boolean;
  disabledTab2: boolean;
  disabledTab3: boolean;
  tab1Icon?: string;
  tab2Icon?: string;
  tab3Icon?: string;
}

// Function to generate common argTypes for each tab
const generateTabArgTypes = (tabNumber: number) => ({
  [`tab${tabNumber}`]: {
    control: { type: "text" },
    name: `Tab ${tabNumber} Label`,
    description: `Label for Tab ${tabNumber}`,
  },
  [`disabledTab${tabNumber}`]: {
    control: { type: "boolean" },
    name: `Disable Tab ${tabNumber}`,
    description: `Disable Tab ${tabNumber}`,
  },
  [`tab${tabNumber}Icon`]: {
    control: { type: "text" },
    name: `Tab ${tabNumber} Icon`,
    description: `Icon for Tab ${tabNumber}`,
  },
});

const meta: Meta<TabsStoryProps> = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ...generateTabArgTypes(1),
    ...generateTabArgTypes(2),
    ...generateTabArgTypes(3),
  },
  args: {
    defaultActiveId: "1",
    tab1: "Tab 1",
    disabledTab1: false,
    tab1Icon: "🔥",
    tab2: "Tab 2",
    disabledTab2: true,
    tab2Icon: "",
    tab3: "Tab 3",
    disabledTab3: false,
    tab3Icon: "",
  },
};

export default meta;
type Story = StoryObj<TabsStoryProps>;

export const Primary: Story = {
  render: (args: TabsStoryProps) => (
    <Tabs defaultActiveId={args.defaultActiveId}>
      <TabsList>
        <Tab id="1" disabled={args.disabledTab1}>
          {args.tab1}
          <span>{args.tab1Icon}</span>
        </Tab>
        <Tab id="2" disabled={args.disabledTab2}>
          {args.tab2}
          <span>{args.tab2Icon}</span>
        </Tab>
        <Tab id="3" disabled={args.disabledTab3}>
          {args.tab3}
          <span>{args.tab3Icon}</span>
        </Tab>
      </TabsList>
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      <TabPanel whenActive="3">Content for Tab 3</TabPanel>
    </Tabs>
  ),
};
