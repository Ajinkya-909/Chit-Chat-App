import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";

function Sidebar() {
  const { getUsers, users, selectedUser, setSelectedUser, isUserLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUserLoading)
    return (
      <div className="mx-auto pt-16">
        <h1 className="font-bold text-2xl">Loading...</h1>
      </div>
    );

  return (
    <aside
      style={{ height: "100%" }}
      className="h-full relative w-20 lg:w-72 flex flex-col transition-all duration-200"
    >
      <div style={{ padding: "1rem" }} className="w-full p-5">
        <div style={{ gap: "0.5rem" }} className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium lg:block">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}
      </div>

      <div className="overflow-y-auto w-full py-3">
        {users.map((user) => (
          <button
            style={{ gap: "1rem", padding: "0.75rem" }}
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
                  w-full p-3 flex items-center gap-3
                  hover:bg-base-300 transition-colors
                
                `}
          >
            <div className="relative mx-auto lg:mx-0">
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
            </div>

            {/* User info - only visible on larger screens */}
            <div className=" lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {/* {onlineUsers.includes(user._id) ? "Online" : "Offline"} */}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
export default Sidebar;
