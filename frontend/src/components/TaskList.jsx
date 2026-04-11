import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onToggle, disabled }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">📝</div>
                <h3>No tasks yet</h3>
                <p>Create your first task above to get started!</p>
                <p className="empty-hint">Data stored in H2 in-memory database</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <div
                    key={task.id}
                    className={`task-item ${task.completed ? 'completed' : ''}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <div className="task-content">
                        <div className="task-checkbox">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggle(task.id)}
                                id={`task-${task.id}`}
                                disabled={disabled}
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
                        disabled={disabled}
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
