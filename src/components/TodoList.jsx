import TodoItem from "./TodoItem";

function TodoList({ todos, toggleDone, deleteTodo }) {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded shadow p-4">
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">할 일이 없습니다 !! </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
