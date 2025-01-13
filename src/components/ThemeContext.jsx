import React, { createContext, useState, useContext, useEffect } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    // console.log(localTheme);
    if (localTheme == 'dark') {
      document.documentElement.classList.add('dark');
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
