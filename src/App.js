// src/App.js
import React from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';

const App = () => {
    const handleLogin = async () => {
        try {
            const response = await axios.post('/login', {
                username: 'admin',
                password: 'enter123',
            });
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <div>
            <h1>Secure File Sharing</h1>
            <button onClick={handleLogin}>Login as Admin</button>
            <FileUpload />
        </div>
    );
};

export default App;
