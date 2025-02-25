"use client";
import { useRouter } from "next/navigation";
export default function MyPage() {
  const router = useRouter();

  return (
    <button className="myButton" type="button" onClick={() => router.push("/form")}>
     youtubeForm
    </button>
  );
}
