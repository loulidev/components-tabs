# Tabulous

Tabulous is a flexible and easy-to-use Tabs component library for React. It uses compound components to manage state and rendering efficiently. This README will guide you through the setup, usage, and internals of the Tabulous component.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)

## Installation

To install Tabulous, run:

````bash
yarn add tabulous```
````

## Usage

Here's a basic example of how to use the Tabulous components:

```jsx
import React from "react";
import { Tabs, Tab, TabPanel, TabsList } from "tabulous";

function App() {
  return (
    <Tabs>
      <TabsList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabsList>
      <TabPanel>
        <h2>Content for Tab 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Tab 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Tab 3</h2>
      </TabPanel>
    </Tabs>
  );
}

export default App;
```
