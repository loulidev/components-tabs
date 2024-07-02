import React, { useState } from "react";
import ActiveTabContext from "../../context/ActiveTabContext";
import "./TabsStyles.css";

interface TabsProps {
  children: React.ReactNode;
  defaultActiveId: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultActiveId }) => {
  const [activeId, setActiveId] = useState(defaultActiveId);

  return (
    <ActiveTabContext.Provider value={[activeId, setActiveId]}>
      <section className="tabs-container">{children}</section>
    </ActiveTabContext.Provider>
  );
};
