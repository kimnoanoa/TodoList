import TodoItem from "./TodoItem";

function TodoList({ todos, toggleDone, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 rounded shadow p-4 text-center text-gray-400">
        할 일이 없습니다 !!
      </div>
    );
  }

  // 📌 날짜별로 그룹 만들기
  const grouped = todos.reduce((acc, todo) => {
    if (!acc[todo.date]) acc[todo.date] = [];
    acc[todo.date].push(todo);
    return acc;
  }, {});

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded shadow p-4">
      {Object.keys(grouped)
        .sort((a, b) => (a < b ? 1 : -1)) // 최신 날짜가 위로 오도록 정렬
        .map((date) => (
          <div key={date} className="mb-6">
            
            {/* 날짜 제목 */}
            <h2 className="text-lg font-bold mb-2 text-gray-600 dark:text-gray-300">
              📅 {date}
            </h2>

            {/* 날짜에 해당하는 todo 목록 */}
            {grouped[date].map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleDone={toggleDone}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default TodoList;
