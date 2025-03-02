import { THEMES } from "../constants/index.js";
import React from "react";
import { Send } from "lucide-react";
import { useThemeStorage } from "../store/useThemeStorage";
import "../App.css";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStorage();
  return (
    <div className="mx-auto text-center relative my-4 px-4">
      <div className=" mx-auto space-y-6">
        <div
          style={{ padding: "1rem", gap: "0.5rem" }}
          className="flex flex-col gap-1"
        >
          <h1 style={{ fontSize: "xx-large", fontWeight: "bold" }}>Themes</h1>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              style={{ padding: "0.25rem", margin: "0.25rem" }}
              className={`
               border  border-gray-500 flex items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                data-theme={t}
                style={{
                  height: "1.25rem",
                }}
                className="relative  color-box w-8/12 rounded-md "
              >
                <div
                  data-theme={t}
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "1px",
                  }}
                  className="flex justify-center items-center size-2"
                >
                  <div
                    data-theme={t}
                    style={{
                      backgroundColor:
                        "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity, 1)))",
                      height: "100%",
                      width: "25%",
                      margin: "1px",
                    }}
                    className="bg-primary"
                  ></div>
                  <div
                    data-theme={t}
                    style={{
                      backgroundColor:
                        " var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity, 1)))",
                      height: "100%",
                      width: "25%",
                      margin: "1px",
                    }}
                    className="bg-secondary"
                  ></div>
                  <div
                    data-theme={t}
                    style={{
                      backgroundColor:
                        " var(--fallback-a,oklch(var(--a)/var(--tw-bg-opacity, 1)))",
                      height: "100%",
                      width: "25%",
                      margin: "1px",
                    }}
                    className="bg-accent"
                  ></div>
                  <div
                    data-theme={t}
                    style={{
                      backgroundColor:
                        " var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity, 1)))",
                      height: "100%",
                      width: "25%",
                      margin: "1px",
                    }}
                    className="bg-neutral"
                  ></div>
                </div>
              </div>
              <span className="text-[11px] hide-text font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3
          className="text-center m-3"
          style={{ fontSize: "larger", margin: "1rem", fontWeight: "semibold" }}
        >
          Preview
        </h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div
            style={{
              padding: "1rem",
              backgroundColor:
                " var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity, 1)))",
            }}
            className="p-4 bg-base-200"
          >
            <div className="max-w-lg mx-auto">
              {/* Mock Chat UI */}
              <div
                style={{
                  backgroundColor:
                    "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
                className="bg-base-100 rounded-xl shadow-sm overflow-hidden"
              >
                {/* Chat Header */}
                <div
                  style={{
                    backgroundColor:
                      "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
                    border:
                      "1px solid var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity, 1)))",
                    padding: "0.2rem 0.5rem",
                  }}
                  className="px-4 py-3 border-b border-base-300 bg-base-100"
                >
                  <div
                    style={{ gap: "1rem" }}
                    className="flex items-center gap-3"
                  >
                    <div
                      style={{
                        backgroundColor:
                          "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity, 1)))",
                        borderRadius: "100%",
                        padding: "1rem",
                        height: "2rem",
                        width: "2rem",
                        fontWeight: "bold",
                      }}
                      className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium"
                    >
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor:
                      "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
                  }}
                  className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100"
                >
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isSent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        style={
                          message.isSent
                            ? {
                                backgroundColor:
                                  "var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity, 1)))",
                                padding: "0.5rem",
                                borderRadius: "10px",
                              }
                            : {
                                padding: "0.5rem",
                                borderRadius: "10px",
                                backgroundColor:
                                  " var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity, 1)))",
                              }
                        }
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }
                        `}
                      >
                        <p
                          style={
                            message.isSent
                              ? {
                                  color:
                                    " var(--fallback-pc,oklch(var(--pc)/var(--tw-bg-opacity, 1)))",
                                }
                              : {
                                  color:
                                    "var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity, 1)))",
                                }
                          }
                          className="text-sm bg-base-content"
                        >
                          {message.content}
                        </p>
                        <p
                          style={
                            message.isSent
                              ? {
                                  color:
                                    "var(--fallback-pc,oklch(var(--pc)/0.7))",
                                }
                              : {
                                  color:
                                    "var(--fallback-bc,oklch(var(--bc)/0.7))",
                                }
                          }
                          className={`
                            text-[10px] mt-1.5
                            ${
                              message.isSent
                                ? "text-primary-content/70"
                                : "text-base-content/70"
                            }
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor:
                      "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity, 1)))",
                  }}
                  className="p-4 border-t border-base-300 bg-base-100"
                >
                  <div style={{ gap: "1rem" }} className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
