import { MessageSquare } from "lucide-react";
import React from "react";

const NoChatSelected = () => {
  return (
    <div
      style={{
        padding: "4rem",
        height: "100%",
        backgroundColor: "var(--fallback-b1,oklch(var(--b1)/0.5))",
      }}
      className="w-full h-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50"
    >
      <div
        style={{ gap: "1rem" }}
        className="max-w-md flex flex-col justify-center  text-center space-y-6"
      >
        {/* Icon Display */}
        <div style={{ gap: "2rem" }} className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              style={{
                backgroundColor: "var(--fallback-p,oklch(var(--p)/0.1))",
                padding: "1rem",
                borderRadius: "20px",
              }}
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
