import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import useTodos from "./hooks/useTodos";
import useDarkMode from "./hooks/useDarkMode";

import { getToday } from "./utils/date";

import "./styles/animation.css";
import "./styles/globals.css";

function App() {
  const { todos, addTodo, deleteTodo, toggleDone } = useTodos();
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={
        dark
          ? "dark min-h-screen bg-gray-900 text-white transition-all pt-16"
          : "min-h-screen bg-gray-100 text-black transition-all pt-16"
      }
    >
      {/* 헤더 */}
      <Header dark={dark} toggleDarkMode={toggleDarkMode} />

      {/* 날짜 */}
      <div className="text-center text-gray-500 dark:text-gray-400 mt-6 mb-6">
        📅 {getToday()}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-lg mx-auto p-4">
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
