function TodoItem({ todo, toggleDone, deleteTodo }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-3 animate-fadein">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(todo.id)}
          className="w-5 h-5 accent-pink-500 cursor-pointer"
        />

        <span
          className={`cursor-pointer transition ${
            todo.done ? "line-through text-gray-400" : ""
          }`}
          onClick={() => toggleDone(todo.id)}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
