import { useEffect } from "react";

export default function Home({ setView }) {
  useEffect(() => setView('HOME'));

  return (
    <main>Component - Home</main>
  );
}