import { Genbot } from "@/assets";
import {
  Fab,
  Webchat,
  WebchatProvider,
  Configuration,
  getClient,
  WebchatClient,
} from "@botpress/webchat";
import { useEffect, useState } from "react";

export const Chatbot = () => {
  const [client, setClient] = useState<WebchatClient | null>(null);
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const clientId = "0d501df1-4bbb-4536-a788-75bf5f735dec";

  // https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/18/14/20250418144158-EGDKN64M.json

  const configuration: Configuration = {
    botAvatar: Genbot,
    botName: "GenBot",
    botDescription: "Your AI Assistant that helps you with everything",
    color: "#D15D6F",
    variant: "solid",
    composerPlaceholder: "Type your message...",
  };

  const userData = { foo: "bar" };

  useEffect(() => {
    const client = getClient({ clientId });
    setClient(client);

    // You can listen on events sent by the Webchat backend like this:
    client.on("*", (ev) => {
      console.log("Event:", ev);

      // You can also call the Webchat backend API like this:
      client.getUser().then((user) => {
        console.log("User:", user);
      });
    });
  }, []);

  const toggleWebchat = () => {
    setIsWebchatOpen((prev) => !prev);
  };

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <WebchatProvider
      client={client as WebchatClient}
      configuration={configuration}
      userData={userData}
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
