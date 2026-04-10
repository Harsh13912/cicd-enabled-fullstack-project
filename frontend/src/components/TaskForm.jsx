import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Please enter a task title');
            return;
        }

        onAdd({
            title: title.trim(),
            description: description.trim(),
        });

        setTitle('');
        setDescription('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-input"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={100}
                />
            </div>
            <div className="form-group">
        <textarea
            className="form-textarea"
            placeholder="Add details (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            maxLength={500}
        />
            </div>
            <button type="submit" className="submit-btn">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;