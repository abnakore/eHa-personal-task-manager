import React, { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("personal-tasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error loading tasks from localStorage:", error);
      }
    }
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("personal-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    setTasks,
  };
}

export default useTasks;
