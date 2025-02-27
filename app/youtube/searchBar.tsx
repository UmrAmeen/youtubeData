"use client";
import { useState } from "react";
import { videos } from "../data/data";
import Youtube from "./youtube";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(videos);

  const filteredList = list.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  // console.log(filteredList);
  return (
    <div>
      <form>
        <input
          className="inputBox"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </form>

      {filteredList.map((video) => (
        <div
          key={video.id}
          className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
        >
          <Youtube {...video} />
        </div>
      ))}
    </div>
  );
}
