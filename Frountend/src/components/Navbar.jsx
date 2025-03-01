import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      style={{ padding: "0.5rem", marginBottom: "1rem" }}
      className="border-b border-base-300 w-full relative top-0 z-40 "
    >
      <div style={{ paddingLeft: "2rem" }} className="container mx-auto h-16">
        <div className="flex items-center justify-between h-full">
          <div
            style={{ gap: "0.5rem" }}
            className="flex items-center mx-2 justify-between gap-2"
          >
            <Link to="/" className="hover:opacity-80 transition-all">
              <h1
                style={{ fontWeight: "bold", fontSize: "x-large" }}
                className="md:text-lg"
              >
                Chit Chat
              </h1>
            </Link>
          </div>

          <div
            style={{ gap: "0.5rem" }}
            className="flex justify-around items-center gap-2"
          >
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors `}
            >
              <Settings className="w-4 h-4" />
              <span className="hide-text sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hide-text sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 btn btn-sm items-center"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hide-text sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
