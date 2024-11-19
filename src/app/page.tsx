'use client'
import Image from "next/image";
import Login from "./components/Login";
import TextForm from "./components/TextForm";
import ImageForm from "./components/ImageForm";
import { useState } from 'react';
import CurrentTime from "./components/CurrentTime";

export default function Home() {
  const [showTextForm, setShowTextForm] = useState(false);
  const [showImageForm, setShowImageForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setShowTextForm(true);
    setShowImageForm(true);
    setIsLoggedIn(true);
  };
  return (
    <div className="bg-green-100 text-green-800 p-6">
      <main className="space-y-4">
        <Image 
          src="/satoutyouzu_bg_black.png" 
          alt="Logo" 
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-green-900 text-center">Dummy Site</h1>
        <CurrentTime />
        {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
        {showTextForm && <TextForm />}
        {showImageForm && <ImageForm />}
      </main>
    </div>
  );
}
