import { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomNames, { generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({ name: generateRandomNames(), msg: generateRandomText(20) })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-full flex flex-col bg-white rounded shadow p-4 overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4 flex-col-reverse">
        {chatMessages.map((msg, idx) => (
          <ChatMsg key={idx} name={msg.name} msg={msg.msg} />
        ))}
      </div>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(addMessage({ name: "You", msg: liveMsg }));
              setLiveMsg("");
            }
          }}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white text-sm px-4 py-1 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
