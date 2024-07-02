import { useContext } from "react";
import ActiveTabContext from "../../context/ActiveTabContext";
import "./TabPanelStyles.css";

interface TabPanelProps {
  whenActive: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ whenActive, children }) => {
  const [activeId] = useContext(ActiveTabContext);
  return (
    whenActive === activeId && (
      <article className="tab-content">{children}</article>
    )
  );
};
