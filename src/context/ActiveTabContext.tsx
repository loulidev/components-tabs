import { createContext } from "react";

const ActiveTabContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);

export default ActiveTabContext;
