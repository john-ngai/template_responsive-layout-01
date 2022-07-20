import { useEffect } from "react";

export default function Contact({ setPage }) {
  useEffect(() => setPage('CONTACT'));
  
  return (
    <div>Component - Contact</div>
  );
}