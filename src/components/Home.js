import { useEffect } from "react";

export default function Home(props) {
  const { page, setPage } = props;
  useEffect(() => setPage('HOME'), []);

  return (
    <div>Component - Home</div>
  );
}