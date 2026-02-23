import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur">
      
      <h1 className="text-3xl font-bold">
        ThemeApp
      </h1>

     
      <button
        onClick={toggleTheme}
        className={`relative w-14 h-8 rounded-full transition-colors duration-300
        ${isDark ? "bg-slate-200" : "bg-slate-800"}`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full
          flex items-center justify-center
          transition-transform duration-300
          ${
            isDark
              ? "translate-x-6 bg-slate-900 text-white"
              : "bg-white text-slate-800"
          }`}
        >
          {isDark ? "🌙" : "☀️"}
        </span>
      </button>

    </nav>
  );
}

export default Navbar;
