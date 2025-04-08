import PropTypes from "prop-types";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      <img
        className="w-full h-44 object-cover"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{channelTitle}</p>
        <p className="text-gray-500 text-xs mt-1">
          {statistics?.viewCount} views
        </p>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border-2 border-red-500 rounded-xl p-1">
      <VideoCard info={info} />
    </div>
  );
};

VideoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

AdVideoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default VideoCard;
