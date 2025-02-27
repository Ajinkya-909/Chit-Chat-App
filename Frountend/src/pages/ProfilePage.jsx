import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Camera, Mail, User } from "lucide-react";

function ProfilePage() {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setselectedImg] = useState(null);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setselectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };
  return (
    <div
      style={{ margin: "1.5rem auto" }}
      className=" w-3/5 max-[760px]:w-4/5 mx-auto px-4"
    >
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div
            style={{ marginBottom: "1.25rem" }}
            className="text-center my-5 mb-8"
          >
            <h1 style={{ fontSize: "xx-large", fontWeight: "bold" }}>
              Create Account
            </h1>
            <p className="text-base-content/60">
              Get started with your free account
            </p>
          </div>

          {/* avatar upload section */}

          <div
            style={{ gap: "1rem" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div className=" h-24 w-24">
                <img
                  src={authUser.profilePic || selectedImg || "/avatar.png"}
                  alt="Profile"
                  style={{ objectFit: "cover" }}
                  className=" h-full w-full rounded-full  border-4 "
                />
              </div>
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }
                `}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "13rem",
                    bottom: "1.2rem",
                    borderRadius: "100rem",
                    padding: "1rem",
                    backgroundColor: "black",
                  }}
                >
                  <Camera className="w-5 fill-black h-5 text-base-200 " />
                </div>
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div
            style={{ gap: "1rem" }}
            className="w-full space-y-6 flex flex-col gap-4"
          >
            <div className="space-y-1.5">
              <div
                style={{ gap: "0.5rem", padding: "2px" }}
                className="text-sm text-zinc-400 flex gap-2"
              >
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p
                style={{ padding: "0.5rem" }}
                className="px-4 py-2.5 bg-base-200 rounded-lg border"
              >
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div
                style={{ gap: "0.5rem", padding: "2px" }}
                className="text-sm text-zinc-400 flex gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p
                style={{ padding: "0.5rem" }}
                className="px-4 py-2.5 bg-base-200 rounded-lg border"
              >
                {authUser?.email}
              </p>
            </div>
          </div>

          <div
            style={{
              margin: "2rem auto",
              backgroundColor: "rgb(10, 15, 26",
              padding: "1rem",
              borderRadius: "20px",
            }}
            className="mt-6 bg-gray-900 rounded-xl p-6"
          >
            <h2
              style={{ margin: "0.5rem 0rem" }}
              className="text-lg font-medium  mb-4"
            >
              Account Information
            </h2>
            <div className="space-y-3 text-sm">
              <div
                style={{ marginBottom: "0.25rem" }}
                className="flex items-center justify-between py-2 border-b border-zinc-700"
              >
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div
                style={{ marginTop: "0.25rem" }}
                className="flex items-center justify-between py-2"
              >
                <span>Account Status</span>
                <span style={{ color: "rgb(21, 207, 90)" }}>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
