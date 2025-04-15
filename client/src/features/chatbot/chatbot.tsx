import { Genbot } from "@/assets";
import { Fab, Webchat, WebchatProvider } from "@botpress/webchat";
import { useState } from "react";

export const Chatbot = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prev) => !prev);
  };

  return (
    <WebchatProvider
      configuration={{
        // clientId: "0d501df1-4bbb-4536-a788-75bf5f735dec",
        botName: "GenBot",
        botAvatar: Genbot,
        color: "#D15D6F",
        variant: "solid",
        composerPlaceholder: "Type your message...",
        botDescription: "Your AI Assistant",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "600px",
          display: isWebchatOpen ? "block" : "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          overflow: "hidden",
          zIndex: 9999,
        }}
      >
        <Webchat />
      </div>
      <Fab
        onClick={toggleWebchat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      />
    </WebchatProvider>
  );
};

export default Chatbot;
