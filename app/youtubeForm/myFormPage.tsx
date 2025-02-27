import Link from "next/link";

export default function MyPage() {
  return (
    <div>
      <Link href="/youtubeForm/channelForm">
        <button className="myButton">youtubeChannel</button>
      </Link>
      <Link href="/youtubeForm">
        <button className="myButton">youtubeForm</button>
      </Link>
    </div>
  );
}
