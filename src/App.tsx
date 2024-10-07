import "./App.css";
import { Tabs, Tab, TabPanel, TabsList } from "./components";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
