"use server";

import db from "./lib/sqlite/db";

export async function createChannelForm(
  prevFormState: any,
  formData: FormData
) {
  const title = formData.get("title") as string;
  console.log("title", title);
  const postedAt = formData.get("postedAt");
  console.log("postedAt", postedAt);

  const data = db
    .prepare("SELECT * FROM youtubeData WHERE title = ?")
    .get(title);
  console.log("data", data);

  const insert = db.prepare(
    "INSERT INTO youtubeData(id, title,  postedAt) VALUES(?, ? ,?)"
  );

  const result = insert.run("145", title, postedAt);

  if (result.lastInsertRowid) {
    return {
      success: true,
      error: "",
    };
  }
  return {
    success: false,
    error: "Something went wrong!",
  };
}
