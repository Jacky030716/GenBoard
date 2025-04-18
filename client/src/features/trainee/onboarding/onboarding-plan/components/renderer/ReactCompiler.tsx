import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button } from "@/components/ui/button";
import { Genbot } from "@/assets";
import { CodeAnalysisModal } from "./CodeAnalysisModal";
import { genAI } from "@/lib/gemini";

interface AnalysisScore {
  score: number;
  feedback: string;
}

interface CodeAnalysisResult {
  codeQuality: AnalysisScore;
  performance: AnalysisScore;
  security: AnalysisScore;
}

// Setup Gemini client

const defaultCode = `
function Hello() {
  return (
    <div>
      <h1>Sign-up Form</h1>
      <div>
        <input 
          type="text"
          placeholder="Enter your name here"
          style={{
            border: "1px solid grey",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        />
      </div>
    </div>
  )
  }
render(<Hello />)
`;
const ReactCompiler: React.FC = () => {
  const [code, setCode] = useState(defaultCode);
  const [compiledCode, setCompiledCode] = useState(defaultCode);
  const [codeAnalysis, setCodeAnalysis] = useState<CodeAnalysisResult | null>(
    null
  );
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCompile = async () => {
    setIsAnalyzing(true);

    const prompt = `
          Analyze the following React code and provide a JSON response with the following structure:
      
          {
              "codeQuality": {
              "score": number (out of 100),
              "feedback": string (a single sentence summary)
              },
              "performance": {
              "score": number (out of 100),
              "feedback": string (a single sentence summary)
              },
              "security": {
              "score": number (out of 100),
              "feedback": string (a single sentence summary)
              }
          }
      
          Analysis Criteria:
          1. Code Quality and Style: Is the code well-structured, readable, and maintainable?
          2. Performance and Efficiency: Is the code optimized for React rendering and resource usage?
          3. Security: Identify any potential security concerns (e.g., XSS, unsafe rendering, input sanitization).
      
          React Code:
          """${code}"""
        `;

    try {
      const response = await genAI.models.generateContent({
        model: "gemini-1.5-pro-latest",
        contents: prompt,
      });

      let raw = response.text ?? "";

      // Remove markdown formatting (```json ... ```)
      raw = raw.trim();
      if (raw.startsWith("```json")) {
        raw = raw
          .replace(/^```json/, "")
          .replace(/```$/, "")
          .trim();
      } else if (raw.startsWith("```")) {
        raw = raw.replace(/^```/, "").replace(/```$/, "").trim();
      }

      const analysis = JSON.parse(raw);
      setCodeAnalysis(analysis);
      setIsAnalysisModalOpen(true);
    } catch (error) {
      console.error("Failed to parse JSON from Gemini response:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div
      className="w-full"
      style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}
    >
      <h2>React Code Compiler</h2>

      <LiveProvider code={compiledCode} noInline={true}>
        <div style={{ marginBottom: "1rem" }}>
          <LiveEditor
            onChange={(newCode) => setCode(newCode)}
            className="max-h-[300px] overflow-auto p-4 rounded-xl font-montserrat"
            style={{
              backgroundColor: "#282c34",
              color: "white",
              fontSize: 16,
              minHeight: "200px",
            }}
          />
        </div>

        <div className="w-full flex gap-2">
          <Button
            className="flex-1 bg-[#403D69] hover:bg-[#403D69]/90 text-white text-lg font-semibold h-12 mb-4"
            onClick={() => setCompiledCode(code)}
            disabled={isAnalyzing}
          >
            Run Code
          </Button>
          <Button
            className="flex-1 items-center bg-[#C36470] hover:bg-[#C36470]/90 text-white text-lg font-semibold h-12 mb-4"
            onClick={handleCompile}
            disabled={isAnalyzing}
          >
            <img
              src={Genbot}
              alt="Genbot"
              className="object-cover size-6 mr-2"
            />
            {isAnalyzing ? "Analyzing..." : "Analyze Code"}
          </Button>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "1rem",
            borderRadius: "5px",
            minHeight: "100px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 className="font-semibold text-xl mb-3">Output:</h3>
          <LivePreview />
        </div>

        <div style={{ color: "red", marginTop: "1rem" }}>
          <LiveError />
        </div>
      </LiveProvider>

      {/* Code Analysis Modal */}
      <CodeAnalysisModal
        analysis={codeAnalysis}
        open={isAnalysisModalOpen}
        onOpenChange={setIsAnalysisModalOpen}
      />
    </div>
  );
};

export default ReactCompiler;
