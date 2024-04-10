import { useContext } from "react";
import ActiveTabContext from "../context/ActiveTabContext";

interface TabProps {
  id: string;
  label: string;
}

export const Tab: React.FC<TabProps> = ({ id, label }) => {
  const [, setActiveId] = useContext(ActiveTabContext);

  const handleOnClick = () => {
    setActiveId(id);
  };
  return (
    <button type="button" onClick={handleOnClick}>
      {label}
    </button>
  );
};
