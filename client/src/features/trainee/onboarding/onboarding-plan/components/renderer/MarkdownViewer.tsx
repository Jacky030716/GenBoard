import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactCompiler from "@/features/trainee/onboarding/onboarding-plan/components/renderer/ReactCompiler";
import { cn } from "@/lib/utils";

export const MarkdownViewer = ({
  type,
  path,
  onContinue,
}: {
  type: string;
  path: string;
  onContinue?: () => void;
}) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
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
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchMarkdown();
  }, [path]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col mb-10">
      <div className="w-full flex">
        <div
          className={cn(
            "font-montserrat prose prose-p:my-3 max-w-8xl p-6 text-lg bg-white rounded-2xl mb-10",
            type === "code" ? "flex-1" : "w-full"
          )}
        >
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              // @ts-ignore
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    // @ts-ignore
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        </div>

        {/* If type is code, render this */}
        {type === "code" && (
          <div className="flex-1">
            <ReactCompiler />
          </div>
        )}
      </div>
      <Button
        className="mt-auto mx-auto w-[500px] rounded-full bg-[#5F6489] hover:bg-[#5F6489]/90 text-white text-lg font-semibold h-14"
        onClick={onContinue}
      >
        Continue
      </Button>
    </div>
  );
};
