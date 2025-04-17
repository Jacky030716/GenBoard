import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MarkdownViewer = ({ path }: { path: string }) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    // Fetch the markdown file from the public folder
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch markdown file: ${response.statusText}`
          );
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error(error);
        setMarkdown("Error loading markdown content.");
      }
    };

    fetchMarkdown();
  }, [path]);

  return (
    <div className="font-montserrat prose max-w-8xl p-6 text-lg bg-white rounded-2xl mb-10">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
};
