'use client'
import React, { useEffect, useState } from 'react';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // クライアントサイドでのみ実行されるコードをラップ
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // クライアントサイドでの処理
        }
    }, []);

    const handleLogin = () => {
        if (id === 'test' && password.startsWith('test')) {
            setMessage('ログイン成功');
            onLoginSuccess();
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
                    className="input-default" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <label>パスワード: </label>
                <input
                    type="password"
                    className="input-default" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin} className="button-default" >ログイン</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
