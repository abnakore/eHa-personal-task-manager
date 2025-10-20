import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import useTasks from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTasks();

  return (
    <ThemeProvider>
      <div className="app">
        <header className="app-header">
          <h1>Personal Task Manager</h1>
          <ThemeToggle />
        </header>

        <main className="app-main">
          <section className="task-form-section">
            <h2>Add New Task</h2>
            <TaskForm onAddTask={addTask} />
          </section>

          <section className="task-list-section">
            <h2>
              Your Tasks
              <span className="task-count">
                ({tasks.filter((t) => !t.completed).length} pending)
              </span>
            </h2>
            <TaskList
              tasks={tasks}
              onDeleteTask={deleteTask}
              onToggleCompletion={toggleTaskCompletion}
            />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
