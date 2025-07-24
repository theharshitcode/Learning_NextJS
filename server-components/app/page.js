"use client" // React mein useState hum directly use kar sakte hai per nextjs main ye page server side hota hai to hume client side karne karne ke liye "use client" likhna padta hai
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setcount] = useState(0)
  return (
   <div>
    <h1>Welcome to My Next.js App</h1>
<h3>{count}</h3>
    <button onClick={()=>{setcount (count + 1)}}>{count}Click me</button>

   </div>
  );
}
