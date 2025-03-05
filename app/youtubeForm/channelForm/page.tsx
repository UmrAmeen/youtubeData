"use client";

import { createChannel } from "@/app/actions";
import { videos } from "@/app/data/data";
import Link from "next/link";
import { useState } from "react";

export default function ChannelForm() {
  const [name, setName] = useState("");


  // function onSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  // }

  return (
    <>
      <form className="channelForm" action={createChannel}>
        <label>
          channel :
          <select>
            {videos.map((video) => (
              <option key={video.id}>{video.channel.name}</option>
            ))}
          </select>
        </label>
        <label>
          name:
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" className="submitButton">
          submit
        </button>
      </form>
      <Link href="/youtubeForm">
        <button className="myButton">youtubeForm</button>
      </Link>
    </>
  );
}
