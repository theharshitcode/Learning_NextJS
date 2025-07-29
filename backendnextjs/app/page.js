'use client';
import Image from "next/image";

export default function Home() {
  const data = { name: 'Harshit Saxena', age: 20 , role: 'Developer' };
  const handleClick = async () => {
    const a = await fetch('/api/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const res = await a.json();
    console.log(res);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
