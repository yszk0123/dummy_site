'use client'
import React, { useState } from 'react';

const TextForm: React.FC = () => {
    const [text, setText] = useState('');
    const [submittedText, setSubmittedText] = useState(''); // 送信されたテキストを保存する状態

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted text:', text);
        setSubmittedText(text); // 送信されたテキストを保存
        // ここでテキストを送信する処理を追加できます
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="テキストを入力してください"
            />
            <button type="submit">送信</button>
            <div>入力されたテキスト: {submittedText}</div>
        </form>
    );
};

export default TextForm;
