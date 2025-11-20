"use server"
import fs from "fs/promises"

export const handleSubmit=async(e) => {
    console.log(e.get("name"),e.get("password"))
    let a=await fs.writeFile("Details.txt",`Name: ${e.get("name")} Password: ${e.get("password")}`)
    console.log(a)
  }
  