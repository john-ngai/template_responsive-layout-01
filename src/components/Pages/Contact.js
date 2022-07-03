import { useEffect } from "react";

export default function Contact(props) {
  const { page, setPage } = props;
  useEffect(() => setPage('CONTACT'), []);
  
  return (
    <div>Component - Contact</div>
  );
}