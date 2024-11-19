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

  const handleLoginSuccess = () => {
    setShowTextForm(true);
    setShowImageForm(true);
  };
  return (
    <div>
      <main>
        <Image 
          src="/satoutyouzu_bg_black.png" 
          alt="Logo" 
          width={100}
          height={100}
        />
        <h1>Dummy Site</h1>
        <CurrentTime />
        <Login onLoginSuccess={handleLoginSuccess} />
        {showTextForm && <TextForm />}
        {showImageForm && <ImageForm />}
      </main>
    </div>
  );
}
