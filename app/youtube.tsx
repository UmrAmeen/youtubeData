import Link from "next/link";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export default function Youtube({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  return (
    
    <div className="flex flex-col gap-2">
      
      <Link href={id}>
        <div className="relative">
          <img src={thumbnailUrl} className="block w-full" />
          <div className="absolute bottom-6 right-2 bg-secondary-dark text-secondary text-sm px-0.5 rounded text-red-600">
            {duration}
          </div>
        </div>
        <p className="text-blue-600 font-bold">{title}</p>
      </Link>
      <div className="flex gap-2">
        <img src={channel.profileUrl} className=" w-12 h-12 rounded-full" />
        <p className="text-secondary-text text-sm">{channel.name}</p>
      </div>
     
    </div>
  );
}
