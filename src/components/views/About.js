import { useEffect } from "react";

export default function About({ setPage }) {
  useEffect(() => setPage('ABOUT'));
  
  return (
    <div>Component - About</div>
  );
}