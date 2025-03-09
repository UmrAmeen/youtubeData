"use server"

import db from "./lib/sqlite/db"

export async function createChannel(prevFormState: any, formData: FormData) {
  const name = formData.get('name') as string
  console.log("name", name)

  const insert = db.prepare("INSERT INTO channel(id, name) VALUES(?, ?)")
  c
  const result = insert.run("123", name)


  if (result.lastInsertRowid) {
    return {
      success: true
    }
  }
  return {
    success: false
  }

}
