import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center px-4 py-6">
      {videos[0] && (
        <div className="w-80">
          <AdVideoCard info={videos[0]} />
        </div>
      )}
      {videos.slice(1).map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id} className="w-80">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
