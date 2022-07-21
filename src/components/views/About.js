import { useEffect } from "react";

export default function About({ setView }) {
  useEffect(() => setView('ABOUT'));
  
  return (
    <main>Component - About</main>
  );
}