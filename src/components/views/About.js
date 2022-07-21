import { useEffect } from "react";

export default function About({ setView }) {
  useEffect(() => setView('ABOUT'));
  
  return (
    <div>Component - About</div>
  );
}