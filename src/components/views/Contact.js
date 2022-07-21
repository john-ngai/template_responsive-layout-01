import { useEffect } from "react";

export default function Contact({ setView }) {
  useEffect(() => setView('CONTACT'));
  
  return (
    <div>Component - Contact</div>
  );
}