import PropTypes from "prop-types";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 border border-gray-200 rounded-md shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <h3 className="font-bold py-2">{title}</h3>
      <p>{channelTitle}</p>
      <p>{statistics.viewCount} views</p>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
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
