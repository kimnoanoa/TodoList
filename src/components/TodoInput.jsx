import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex gap-2 w-full mb-4">
      <input
        type="text"
        value={text}
        placeholder="할 일을 입력하세요"
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />

      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        추가
      </button>
    </div>
  );
}

export default TodoInput;
