import React from "react";
import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import Sidebar from "../components/Sidebar.jsx";

function HomePage() {
  const { selectedUser } = useChatStore();
  return (
    <div
      style={{ position: "relative" }}
      className=" bg-base-200 h-[calc(100vh-70px)]"
    >
      <div
        style={{
          backgroundColor:
            "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
          padding: "1rem",
        }}
        className="bg-base-100  rounded-lg shadow w-full max-w-6xl h-full"
      >
        <div style={{ height: "100%" }} className="flex relative rounded-lg">
          <Sidebar />

          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
