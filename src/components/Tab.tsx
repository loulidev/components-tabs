import { useContext } from "react";
import ActiveTabContext from "../context/ActiveTabContext";

interface TabProps {
  id: string;
  label: string;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ id, label, onClick }) => {
  const [, setActiveId] = useContext(ActiveTabContext);

  const handleOnClick = () => {
    onClick && onClick();
    setActiveId(id);
  };
  return (
    <button type="button" onClick={handleOnClick}>
      {label}
    </button>
  );
};
