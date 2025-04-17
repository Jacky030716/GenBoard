declare global {
  interface Window {
    botpressWebChat: {
      init: (config: { configUrl: string }) => void;
    };
  }
}

import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/14/07/20250414075531-QW8OW8SI.json";
    iframe.width = "100%";
    iframe.height = "600px"; // Adjust height as needed
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
};

export default BotpressChat;
