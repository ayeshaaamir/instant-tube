import { UserCircle2 } from "lucide-react"; // alternate nicer icon
import PropTypes from "prop-types";

const ChatMsg = ({ name, msg }) => {
  return (
    <div className="flex items-start gap-2 text-sm">
      <div className="min-w-[24px]">
        <UserCircle2 className="text-gray-600 w-6 h-6" />
      </div>

      <div className="bg-gray-100 px-3 py-1 rounded-md max-w-[80%] break-words">
        <span className="font-semibold mr-1">{name}:</span>
        <span>{msg}</span>
      </div>
    </div>
  );
};

ChatMsg.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default ChatMsg;
