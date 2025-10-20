import React from "react";
import "./TaskList.css";

function TaskList({ tasks, onDeleteTask, onToggleCompletion }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleCompletion(task.id)}
              className="task-checkbox"
            />
            <div className="task-details">
              <h3 className="task-title">{task.title}</h3>
              {task.description && (
                <p className="task-description">{task.description}</p>
              )}
              <div className="task-meta">
                <span
                  className={`priority-badge priority-${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
                <span className="task-date">
                  {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="delete-btn"
            aria-label="Delete task"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
