'use client'
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        if (id === 'test' && password === 'password') {
            setMessage('ログイン成功');
        } else {
            setMessage('IDまたはパスワードが間違っています');
        }
    };

    return (
        <div>
            <h2>ログイン</h2>
            <div>
                <label>ID: </label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <label>パスワード: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>ログイン</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
