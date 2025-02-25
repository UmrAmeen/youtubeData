"use client";
import { useEffect, useState } from "react";
import { videos } from "../data/data";

export default function MyPage() {
  const [id, setId] = useState(0);
  const [title, setTitel] = useState("");
  const [channel, setChannel] = useState("");
  const [views, setViews] = useState("");
  const [youtubeList, setYoutubeList] = useState(videos);

  console.log("titel", title);
  console.log("id", id);
  console.log("channel", channel);
  console.log("views", views);

  return (
    <div>
      <form className="mypageDiv">
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
          <input
            placeholder="channel"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
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
      </form>
    </div>
  );
}
