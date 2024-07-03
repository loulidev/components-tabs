import React from "react";
import "./TabsListStyles.css";

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <ul className="tabs-list">{children}</ul>;
};
