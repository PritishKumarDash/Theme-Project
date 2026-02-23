import { useTheme } from "../Context/ThemeContext";

function Home() {
  const { theme } = useTheme();

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-4">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h2>

      <p className="max-w-xl text-lg opacity-80">
        Theme globally managed using <b>Context API</b> and styled with{" "}
        <b>Tailwind CSS</b>.
      </p>

      <div
        className={`mt-8 p-6 rounded-2xl shadow-lg max-w-sm
        ${
          theme === "light"
            ? "bg-white text-slate-900"
            : "bg-slate-800 text-slate-100"
        }`}
      >
        <h3 className="text-xl font-semibold mb-2">Sample Card</h3>
        <p>Theme automatically applied here.</p>
      </div>
    </div>
  );
}

export default Home;
