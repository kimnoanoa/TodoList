
function Header({ dark, toggleDarkMode }) {
  return (
    <header className="w-full flex items-center justify-center relative mt-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        📝 <span>To-Do List</span>
      </h1>

      {/* 다크모드 버튼 (오른쪽 상단 고정)
      <button
        onClick={toggleDarkMode}
        className="absolute right-6 px-4 py-2 rounded bg-yellow-300 text-black dark:bg-gray-800 dark:text-white transition"
      >
        {dark ? "라이트 모드" : "다크 모드"}
      </button> */}
    </header>
  );
}

export default Header;
