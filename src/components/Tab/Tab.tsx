import { useContext } from "react";
import ActiveTabContext from "../../context/ActiveTabContext";
import "./TabStyles.css";

interface TabProps {
  id: string;
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Tab: React.FC<TabProps> = ({ id, label, onClick, style }) => {
  const [activeId, setActiveId] = useContext(ActiveTabContext);

  const handleOnClick = () => {
    onClick && onClick();
    setActiveId(id);
  };
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`tab-button ${activeId === id ? "active" : ""}`}
      style={style}
    >
      {label}
    </button>
  );
};
