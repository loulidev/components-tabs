import { useContext } from "react";
import ActiveTabContext from "../../context/ActiveTabContext";
import "./TabStyles.css";

interface TabProps {
  id: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Tab: React.FC<TabProps> = ({
  id,
  children,
  onClick,
  style,
  disabled,
}) => {
  const [activeId, setActiveId] = useContext(ActiveTabContext);

  const handleOnClick = () => {
    onClick && onClick();
    setActiveId(id);
  };
  return (
    <li className="tab-item">
      <button
        disabled={disabled}
        type="button"
        onClick={handleOnClick}
        className={`tab-button ${activeId === id ? "active" : ""} ${
          disabled ? "disabled" : ""
        }`}
        style={style}
      >
        {children}
      </button>
    </li>
  );
};
