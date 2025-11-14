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
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-all">
        <Header dark={dark} toggleDarkMode={toggleDarkMode} />

        {/* 날짜 영역 */}
        <div className="text-center text-gray-500 dark:text-gray-400 mt-4 mb-6">
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
    </div>
  );
}

export default App;
