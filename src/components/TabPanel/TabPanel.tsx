import { useContext } from "react";
import ActiveTabContext from "../../context/ActiveTabContext";

interface TabPanelProps {
  whenActive: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ whenActive, children }) => {
  const [activeId] = useContext(ActiveTabContext);
  return whenActive === activeId && <div>{children}</div>;
};
