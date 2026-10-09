"use client";

import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    return () => {};
  }, []);

  const toggleMode = () => {
    console.log("Changing mode");

    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);

    // Class based
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return <button onClick={toggleMode}>bla bla</button>;
};

export default DarkModeToggle;
