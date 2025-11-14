import { getToday } from "../utils/date";

function Header({ dark, toggleDarkMode }) {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        📝 <span>To-Do List</span>
      </h1>

      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded bg-yellow-300 text-black dark:bg-gray-800 dark:text-white transition"
      >
        {dark ? "라이트 모드" : "다크 모드"}
      </button>
    </header>
  );
}

export default Header;
