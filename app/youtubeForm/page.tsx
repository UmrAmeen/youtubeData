"use client";
import { useActionState, useState } from "react";
import Link from "next/link";
import { videos } from "../data/data";
import { createChannelForm } from "../youtubeAction";

export default function MyPage() {
  const [title, setTitel] = useState("");
  const [views, setViews] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  console.log("titel", title);
  console.log("views", views);
  console.log("thumbnail", thumbnail);
  const [state, formAction, isPending] = useActionState(createChannelForm, {
    success: false,
    error: "",
  });
  return (
    <div>
      {state.success ? <div>Success</div> : <div>{state.error}</div>}
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
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
          />
        </label>

        <label>
          views:
          <input
            name="views"
            placeholder="views"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </label>
        <label>
          postedAt
          <input  name="postedAt" />
        </label>
        <label>
          thumbnailUrl:
          <input
            placeholder=" thumbnailUrl"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </label>
        <label>
          videoUrl :
          <input placeholder="videoUrl" />
        </label>
        <button
          type="submit"
          className="submitButton"
          disabled={isPending}
          formAction={formAction}
        >
          submit
        </button>
      </form>
      <Link href="/youtubeForm/channelForm">
        <button className="myButton">channelForm</button>
      </Link>
    </div>
  );
}
