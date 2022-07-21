import { useEffect } from "react";

export default function Home({ setPage }) {
  useEffect(() => setPage('HOME'));

  return (
    <div>Component - Home</div>
  );
}