import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import taskService from './services/taskService';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load tasks on mount
    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await taskService.getAllTasks();
            setTasks(data);
        } catch (err) {
            setError('Failed to load tasks. Make sure the backend is running.');
            console.error('Error loading tasks:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            const createdTask = await taskService.createTask(newTask);
            setTasks([...tasks, createdTask]);
        } catch (err) {
            alert('Failed to add task. Please try again.');
            console.error('Error adding task:', err);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await taskService.deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            alert('Failed to delete task. Please try again.');
            console.error('Error deleting task:', err);
        }
    };

    const handleToggleTask = async (id) => {
        try {
            const updatedTask = await taskService.toggleTask(id);
            setTasks(tasks.map(task =>
                task.id === id ? updatedTask : task
            ));
        } catch (err) {
            alert('Failed to update task. Please try again.');
            console.error('Error toggling task:', err);
        }
    };

    return (
        <div className="app">
            <div className="container">
                <header className="app-header">
                    <h1>Task Manager</h1>
                    <p className="subtitle">CI/CD DevOps Project - V2</p>
                </header>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <TaskForm onAdd={handleAddTask} />

                {loading ? (
                    <div className="loading">Loading tasks...</div>
                ) : (
                    <TaskList
                        tasks={tasks}
                        onDelete={handleDeleteTask}
                        onToggle={handleToggleTask}
                    />
                )}

                <footer className="app-footer">
                    <p>Total Tasks: {tasks.length} | Completed: {tasks.filter(t => t.completed).length}</p>
                </footer>
            </div>
        </div>
    );
}

export default App;