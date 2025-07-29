"use client";
import { submitAction } from "@/actions/form";
import { useRef } from "react";
export default function Home() {

  const ref = useRef();
  // const submitAction =  async(e) => {
  //   "use server";
  //   console.log(e.get("name") , e.get("surname") , e.get("email") , e.get("age") , e.get("region") , e.get("city"));
  //   let res = await fs.writeFile("./data.json", JSON.stringify({
  //     "name": e.get("name"),
  //     "surname": e.get("surname"),
  //     "email": e.get("email"),
  //     "age": e.get("age"),
  //     "region": e.get("region"),
  //     "city": e.get("city")
  //   }, null, 2), (err) => {
  //     if (err) {
  //       console.error("Error writing file:", err);
  //     } else {
  //       console.log("File written successfully");
  //     }
  //   });
  //   return res;
  // }
  return (
    <><div>
      <h1 className="text-black font-bold">Form Submission</h1>
    </div>
    <form ref={ref} action={(e) => { submitAction(e); ref.current.reset() }} className="flex flex-col gap-4 mx-auto" >
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="border border-gray-300 p-2 rounded  " />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input name="surname" id="surname" className="border border-gray-300 p-2 rounded  " />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" className="border border-gray-300 p-2 rounded  " />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input name="age" id="age" className="border border-gray-300 p-2 rounded  " />
        </div>
        <div>
          <label htmlFor="region">Region</label>
          <input name="region" id="region" className="border border-gray-300 p-2 rounded  " />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input name="city" id="city" className="border border-gray-300 p-2 rounded  " />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </div>
      </form></>
  );
}
