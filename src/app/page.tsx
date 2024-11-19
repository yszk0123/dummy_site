'use client'
import Image from "next/image";
import Login from "./components/Login";
import TextForm from "./components/TextForm";
import { useState } from 'react';

export default function Home() {
  const [showTextForm, setShowTextForm] = useState(false);

  const handleLoginSuccess = () => {
    console.log('ログインが成功しました');
    setShowTextForm(true);
  };

  return (
    <div>
      <main>
        <h1>Dummy Site</h1>
        <Login onLoginSuccess={handleLoginSuccess} />
        {showTextForm && <TextForm />}
      </main>
    </div>
  );
}
