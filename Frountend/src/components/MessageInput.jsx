import React from "react";
import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div style={{ padding: "1rem" }} className="p-4 relative bottom-0 w-full">
      {imagePreview && (
        <div style={{ gap: "0.5rem" }} className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              style={{
                height: "5rem",
                width: "5rem",
                position: "relative",
              }}
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              style={{
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute",
                top: "-0.5rem",
                right: "-0.5rem",
                padding: "0.2rem",
                borderRadius: "100%",
                backgroundColor:
                  "var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity, 1)))",
              }}
              onClick={removeImage}
              className=" rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X
                style={{ height: "0.75rem", width: "0.75rem" }}
                className="size-3"
              />
            </button>
          </div>
        </div>
      )}

      <form
        style={{ gap: "0.5rem" }}
        onSubmit={handleSendMessage}
        className="flex items-center gap-2"
      >
        <div style={{ gap: "0.5rem" }} className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={` sm:flex btn btn-circle
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
