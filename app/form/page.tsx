"use client";
import { useState } from "react";

export default function MyPage() {
  const [id, setId] = useState("");
  const [title, setTitel] = useState("");

  console.log("titel", title);
  console.log("id", id);

  return (
    <div className="mypageDiv">
      <label>
        titel:
        <input
          placeholder="titel"
          value={title}
          onChange={(e) => setTitel(e.target.value)}
        />
      </label>
      <label>
        id:
        <input
          type="number"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <label>
        channel:
        <input placeholder="channel" />
      </label>
      <label>
        views:
        <input type="text" placeholder="views" />
      </label>
    </div>
  );
}
