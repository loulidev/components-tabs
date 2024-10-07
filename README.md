# Tabulous

Tabulous is a flexible and easy-to-use Tabs component library for React. It uses compound components to manage state and rendering efficiently. This README will guide you through the setup, usage, and internals of the Tabulous component.

## Installation

To set up Tabulous, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/loulidev/components-tabs
   cd components-tabs
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

3. To start the development server:

   ```bash
   yarn dev
   ```

4. To run Storybook:
   ```bash
   yarn storybook
   ```

## Usage

Here's a basic example of how to use the Tabulous components:

```jsx
import React from "react";
import { Tabs, Tab, TabPanel, TabsList } from "tabulous";

function App() {
  return (
    <Tabs defaultActiveId={"1"}>
      <TabsList>
        <Tab id="1">Tab 1</Tab>
        <Tab id="2">Tab 2</Tab>
        <Tab id="3">Tab 3</Tab>
      </TabsList>
      <TabPanel whenActive="1">Content for Tab 1</TabPanel>
      <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      <TabPanel whenActive="3">Content for Tab 3</TabPanel>
    </Tabs>
  );
}

export default App;
```
