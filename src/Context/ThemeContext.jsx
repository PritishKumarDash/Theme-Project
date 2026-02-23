import { Children, createContext, useContext, useState } from "react";

export const ThemeContext =  createContext({
        theme: "light",
        toggleTheme: () => {}
    })

export const useTheme = () =>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () =>{
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }


return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <div
        className={`min-h-screen transition-colors duration-300
        ${
          theme === "light"
            ? "bg-slate-100 text-slate-900"
            : "bg-slate-900 text-slate-100"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
);

};