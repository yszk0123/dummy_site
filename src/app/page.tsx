'use client'
import Image from "next/image";
import Login from "./components/Login";
export default function Home() {
  const handleLoginSuccess = () => {
    console.log('ログインが成功しました');
  };
  return (
    <div>
      <main>
        <h1>Dummy Site</h1>
        <Login onLoginSuccess={handleLoginSuccess} />
      </main>
    </div>
  );
}
