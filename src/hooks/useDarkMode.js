import { useState, useEffect } from "react";

function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("darkMode"));
    if (saved !== null) setDark(saved);

  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  const toggleDarkMode = () => setDark(!dark);

  return { dark, toggleDarkMode };
}

export default useDarkMode;
