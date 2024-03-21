import React, {useState, useContext, createContext} from "react";

const ActiveTabContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['', () => {}]);

//Tab component represents an individual tab within the tab list.
//Its role is to handle click events and notify the Tabs component when it's clicked.
interface TabProps {
  id: string;
  label: string;
}

export const Tab: React.FC<TabProps> = ({ id, label}) => {
  const [, setActiveId] = useContext(ActiveTabContext);

  const handleOnClick = () => {
      setActiveId(id);    };
  return (
      <button type="button" onClick={handleOnClick}>
      {label}
      </button>
  );
}

//TabPanel component responsible for displaying the content associated with a tab.
// It should be associated with a specific tab and only be visible when that tab is active.
interface TabPanelProps {
  whenActive: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ whenActive, children }) => {
  const [activeId] = useContext(ActiveTabContext);
  return <div hidden={whenActive!==activeId}>{children}</div>;
};

//Tabs component parent component to hold the state of the active tab and provide it to the Tab and TabPanel components. (orchestration) 
interface TabsProps {
  children: React.ReactNode;
  defaultActiveId: string;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultActiveId }) => {
  const [activeId, setActiveId] = useState(defaultActiveId);

  return (
    <ActiveTabContext.Provider value={[activeId, setActiveId]}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default Tabs;