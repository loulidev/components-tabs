import { useContext } from "react";
import ActiveTabContext from "../../context/ActiveTabContext";
import "./TabStyles.css";

interface TabProps {
  id: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ id, children, onClick, style }) => {
  const [activeId, setActiveId] = useContext(ActiveTabContext);

  const handleOnClick = () => {
    onClick && onClick();
    setActiveId(id);
  };
  return (
    <li>
      <button
        type="button"
        onClick={handleOnClick}
        className={`tab-button ${activeId === id ? "active" : ""}`}
        style={style}
      >
        {children}
      </button>
    </li>
  );
};
