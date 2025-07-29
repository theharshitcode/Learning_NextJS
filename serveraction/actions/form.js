"use server";
import fs from "fs";
export  const submitAction =  async(e) => {
    console.log(e.get("name") , e.get("surname") , e.get("email") , e.get("age") , e.get("region") , e.get("city"));
    let res = await fs.writeFile("./data.json", JSON.stringify({
      "name": e.get("name"),
      "surname": e.get("surname"),
      "email": e.get("email"),
      "age": e.get("age"),
      "region": e.get("region"),
      "city": e.get("city")
    }, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully");
      }
    });
    return res;
  }