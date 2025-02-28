import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";
import "../App.css";

function Sidebar() {
  const { getUsers, users, selectedUser, setSelectedUser, isUserLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setshowOnlineOnly] = useState(false);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  let filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUserLoading)
    return (
      <div className="mx-auto pt-16">
        <h1 className="font-bold text-2xl">Loading...</h1>
      </div>
    );

  return (
    <aside
      style={{ height: "100%" }}
      className="relative w-20 lg:w-72 flex flex-col transition-all duration-200"
    >
      <div style={{ padding: "1rem" }} className="w-full p-5">
        <div style={{ gap: "0.5rem" }} className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hide-text">Contacts</span>
        </div>
        <div
          style={{ marginTop: "1rem" }}
          className="mt-3 lg:flex items-center gap-2"
        >
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setshowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm "
            />
            <span className="text-sm " style={{ margin: "1rem" }}>
              Show online only
            </span>
          </label>
          <span className="text-xs hide-text text-zinc-500">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      <div
        style={{ height: "100%", overflowY: "scroll", scrollbarWidth: "thin" }}
        className=" w-full py-3"
      >
        {filteredUsers.map((user) => (
          <button
            style={{ gap: "1rem", padding: "0.75rem" }}
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
                  w-full p-3  flex gap-3 
                  hover:bg-base-300 transition-colors
                
                `}
          >
            <span className="relative ">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                style={{ height: "3rem", width: "3rem" }}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  style={{
                    height: "0.75rem",
                    width: "0.75rem",
                    backgroundColor: "green",
                    bottom: "0px",
                    right: "0px",
                  }}
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                      rounded-full ring-2 ring-zinc-900"
                />
              )}
            </span>

            {/* User info - only visible on larger screens */}
            <span className=" lg:block text-left min-w-0 hide-text">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </span>
          </button>
        ))}
        <div>{filteredUsers.length === 0 && <p>No users online</p>}</div>
      </div>
    </aside>
  );
}
export default Sidebar;
