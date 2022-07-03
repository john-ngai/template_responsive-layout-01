import { useEffect } from "react";

export default function About(props) {
  const { page, setPage } = props;
  useEffect(() => setPage('ABOUT'), []);
  
  return (
    <div>Component - About</div>
  );
}