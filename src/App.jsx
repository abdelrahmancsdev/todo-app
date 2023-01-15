import React, {
  useState,
  useLayoutEffect,
  createContext,
  useMemo,
} from "react";
import AddTodo from "./assets/components/AddTodo";
import Header from "./assets/components/Header";
import TodoOptions from "./assets/components/TodoOptions";
import TodosArea from "./assets/components/TodosArea";
import "./assets/styles/core/main.scss";

export const HeaderContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [running, setRunning] = useState(false);
  const themeItems = useMemo(() => ({ theme, setTheme }), [theme]);
  useLayoutEffect(() => {
    if (!running) {
      if (localStorage.theme) {
        setTheme(localStorage.theme);
        setRunning(true);
      } else {
        localStorage.theme = theme;
        setRunning(true);
      }
    }
  }, [theme, running]);
  return (
    <div id="appContainer" className={theme}>
      <div id="app">
        <HeaderContext.Provider value={themeItems}>
          <Header />
        </HeaderContext.Provider>
        <AddTodo />
        <TodosArea />
        <TodoOptions />
      </div>
    </div>
  );
}

export default App;
