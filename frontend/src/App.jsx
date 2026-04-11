import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CICDGuide from './components/CICDGuide';
import taskService from './services/taskService';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);

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
            setError('Backend is waking up (Render free tier). Please wait 30-60 seconds and refresh.');
            console.error('Error loading tasks:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            setActionLoading(true);
            const createdTask = await taskService.createTask(newTask);
            setTasks([...tasks, createdTask]);
        } catch (err) {
            alert('Failed to add task. Please try again.');
            console.error('Error adding task:', err);
        } finally {
            setActionLoading(false);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            setActionLoading(true);
            await taskService.deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            alert('Failed to delete task. Please try again.');
            console.error('Error deleting task:', err);
        } finally {
            setActionLoading(false);
        }
    };

    const handleToggleTask = async (id) => {
        try {
            setActionLoading(true);
            const updatedTask = await taskService.toggleTask(id);
            setTasks(tasks.map(task =>
                task.id === id ? updatedTask : task
            ));
        } catch (err) {
            alert('Failed to update task. Please try again.');
            console.error('Error toggling task:', err);
        } finally {
            setActionLoading(false);
        }
    };

    return (
        <div className="app">
            <div className="main-content">
                <div className="container">
                    <header className="app-header">
                        <h1 className="retro-title">CI/CD ENABLED FULL STACK APPLICATION</h1>
                        <p className="subtitle">React + Spring Boot + Docker + GitHub Actions</p>
                    </header>

                    {error && (
                        <div className="error-message">
                            <span className="error-icon">⚠️</span>
                            {error}
                        </div>
                    )}

                    <TaskForm onAdd={handleAddTask} disabled={actionLoading} />

                    {loading ? (
                        <div className="loading-container">
                            <div className="spinner"></div>
                            <p className="loading-text">Loading tasks from backend...</p>
                        </div>
                    ) : (
                        <TaskList
                            tasks={tasks}
                            onDelete={handleDeleteTask}
                            onToggle={handleToggleTask}
                            disabled={actionLoading}
                        />
                    )}

                    <footer className="app-footer">
                        <div className="stats">
              <span className="stat-item">
                <strong>{tasks.length}</strong> Total
              </span>
                            <span className="stat-divider">|</span>
                            <span className="stat-item">
                <strong>{tasks.filter(t => t.completed).length}</strong> Completed
              </span>
                            <span className="stat-divider">|</span>
                            <span className="stat-item">
                <strong>{tasks.filter(t => !t.completed).length}</strong> Active
              </span>
                        </div>
                    </footer>
                </div>
            </div>

            <CICDGuide />
        </div>
    );
}

export default App;
