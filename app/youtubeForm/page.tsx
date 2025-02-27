"use client";
import { useState } from "react";
import Link from "next/link";
import { videos } from "../data/data";

export default function MyPage() {
  const [title, setTitel] = useState("");
  const [views, setViews] = useState("");

  console.log("titel", title);
  console.log("views", views);
  return (
    <div>
      <form className="myFormPage">
        <label>
          channel:
          <select>
            {videos.map((video) => (
              <option key={video.id}>{video.channel.name}</option>
            ))}
          </select>
        </label>

        <label>
          titel:
          <input
            placeholder="titel"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
          />
        </label>

        <label>
          views:
          <input
            type="text"
            placeholder="views"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </label>
        <label>
          thumbnailUrl:
          <input type="Url" placeholder=" thumbnailUrl" />
        </label>
        <label>
          videoUrl :
          <input placeholder="videoUrl" />
        </label>
        <button className="submitButton">submit</button>
      </form>
      <Link href="/youtubeForm/channelForm">
        <button className="myButton">channelForm</button>
      </Link>
    </div>
  );
}
