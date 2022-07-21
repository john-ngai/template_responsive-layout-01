import { useEffect } from "react";

export default function Home({ setView }) {
  useEffect(() => setView('HOME'));

  return (
    <div>Component - Home</div>
  );
}