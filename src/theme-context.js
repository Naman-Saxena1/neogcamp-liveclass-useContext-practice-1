import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState("light-mode");

  let changeTheme = () => {
    if (themeState === "light-mode") {
      setThemeState((themeState) => "dark-mode");
    } else {
      setThemeState((themeState) => "light-mode");
    }
  };

  return (
    <ThemeContext.Provider value={{ themeState, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

let useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
