import React from "react";
import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import Sidebar from "../components/Sidebar.jsx";

function HomePage() {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center ">
        <div
          style={{
            backgroundColor:
              "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
            height: "cal(100vh-8rem)",
            padding: "1rem",
          }}
          className="bg-base-100  rounded-lg shadow w-full max-w-6xl h-[cal(100vh-8rem)]"
        >
          <div
            style={{ height: "" }}
            className="flex relative h-max rounded-lg overflow-hidden"
          >
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
