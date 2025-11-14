import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);

  // 초기 로딩: localStorage → 없으면 기본값 3개 생성
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));

    if (saved && saved.length > 0) {
      setTodos(saved);
    } else {
      const today = new Date().toISOString().split("T")[0];

      const defaultTodos = [
        {
          id: Date.now(),
          text: "고양이 치치 밥 주기",
          done: false,
          date: today
        },
        {
          id: Date.now() + 1,
          text: "리액트 공부하기",
          done: false,
          date: today
        },
        {
          id: Date.now() + 2,
          text: "집 청소하기",
          done: false,
          date: today
        }
      ];

      setTodos(defaultTodos);
    }
  }, []);

  // 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 투두 추가: 날짜 포함
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        done: false,
        date: new Date().toISOString().split("T")[0]
      }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return { todos, addTodo, deleteTodo, toggleDone };
}

export default useTodos;
