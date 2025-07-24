import Image from "next/image";

export default function Home() {
  return (
       <div>
        <div className="container bg-red-100">
          <Image className="rounded-lg mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxt_0PJ8T-KXXZa6YvyLG9iwdnCjpy-VfAQ&s" alt="Description" width={500} height={500} />
        </div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}

// agar Image tag aur import karne per error aata hai to (next.config.mjs) file mein ye paste kar do const nextConfig = {
// const nextConfig = {
//   images: {
//     unoptimized: true,
//   },
// };