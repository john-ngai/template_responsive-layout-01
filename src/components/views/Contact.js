import { useEffect } from "react";

export default function Contact({ setView }) {
  useEffect(() => setView('CONTACT'));
  
  return (
    <main>Component - Contact</main>
  );
}