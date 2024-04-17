import "./App.css";
import { Tabs, Tab, TabPanel } from "./components";

function App() {
  return (
    <>
      <Tabs defaultActiveId={"1"}>
        <Tab id="1" label="Tab 1" />
        <Tab id="2" label="Tab 2" />
        <TabPanel whenActive="1">Content for Tab 1</TabPanel>
        <TabPanel whenActive="2">Content for Tab 2</TabPanel>
      </Tabs>
    </>
  );
}

export default App;
