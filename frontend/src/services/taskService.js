import axios from 'axios';

// Use environment variable for API URL, fallback to localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const taskService = {
    // Get all tasks
    getAllTasks: async () => {
        const response = await api.get('/tasks');
        return response.data;
    },

    // Create a new task
    createTask: async (task) => {
        const response = await api.post('/tasks', task);
        return response.data;
    },

    // Delete a task
    deleteTask: async (id) => {
        await api.delete(`/tasks/${id}`);
    },

    // Toggle task completion
    toggleTask: async (id) => {
        const response = await api.put(`/tasks/${id}/toggle`);
        return response.data;
    },
};

export default taskService;