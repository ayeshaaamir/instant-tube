import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* Left Section: Video + Comments */}
      <div className="flex flex-col w-3/4 p-4 overflow-auto">
        <div className="mb-4">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>

      {/* Right Section: Placeholder for Chat */}
      <div className="w-1/4 border-l border-gray-300 p-4">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
