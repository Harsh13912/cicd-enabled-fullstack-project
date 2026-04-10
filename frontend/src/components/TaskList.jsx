import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onToggle }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    <div className="task-content">
                        <div className="task-checkbox">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggle(task.id)}
                                id={`task-${task.id}`}
                            />
                            <label htmlFor={`task-${task.id}`}></label>
                        </div>
                        <div className="task-details">
                            <h3 className="task-title">{task.title}</h3>
                            {task.description && (
                                <p className="task-description">{task.description}</p>
                            )}
                        </div>
                    </div>
                    <button
                        className="delete-btn"
                        onClick={() => onDelete(task.id)}
                        aria-label="Delete task"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;