import React from "react";
import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import Sidebar from "../components/Sidebar.jsx";

function HomePage() {
  const { selectedUser } = useChatStore();
  return (
    <div style={{ height: "100vh" }} className="h-screen bg-base-200">
      <div
        style={{ padding: "1rem 4rem" }}
        className="flex items-center justify-center "
      >
        <div
          style={{
            backgroundColor:
              "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
          }}
          className="bg-base-100  rounded-lg shadow w-full max-w-6xl h-[cal(100vh-*rem)]"
        >
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
