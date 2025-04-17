import React, { useState } from "react";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from "react-live";
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY!;

// Setup Gemini client
const genAI = new GoogleGenAI({
  apiKey: GEMINI_API_KEY
});

const defaultCode = `
function Hello() {
  return <h1>Hello, React Live!</h1>;
}
render(<Hello />);

`;
const ReactCompiler: React.FC = () => {
    const [code, setCode] = useState(defaultCode);
    const [compiledCode, setCompiledCode] = useState(defaultCode);
    const [codeAnalysis, setCodeAnalysis] = useState<string | null>(null);

    const handleCompile = async () => {
        setCompiledCode(code);  
        const prompt = `
          Analyze the following React code and provide a JSON response with the following structure:
      
          {
              "codeQuality": {
              "score": number (out of 100),
              "feedback": string
              },
              "performance": {
              "score": number (out of 100),
              "feedback": string
              },
              "security": {
              "score": number (out of 100),
              "feedback": string
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
            contents: prompt
          });
      
          let raw = response.text ?? "";
      
          // ✅ Remove markdown formatting (```json ... ```)
          raw = raw.trim();
          if (raw.startsWith("```json")) {
            raw = raw.replace(/^```json/, "").replace(/```$/, "").trim();
          } else if (raw.startsWith("```")) {
            raw = raw.replace(/^```/, "").replace(/```$/, "").trim();
          }
      
          const analysis = JSON.parse(raw);
          setCodeAnalysis(JSON.stringify(analysis, null, 2)); // optional: show pretty-printed JSON
      
          // Calculate average score
          const averageScore = (
            analysis.codeQuality.score +
            analysis.performance.score +
            analysis.security.score
          ) / 3;
          const averageScoreRounded = parseFloat(averageScore.toFixed(2));
      
          console.log("Average Score:", averageScoreRounded);
        } catch (error) {
          console.error("Failed to parse JSON from Gemini response:", error);
        }
    };
      

    return (
        <div style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
        <h2>React Code Compiler</h2>

        <LiveProvider code={compiledCode} noInline={true}>
            <div style={{ marginBottom: "1rem" }}>
            <LiveEditor
                onChange={(newCode) => setCode(newCode)}
                style={{
                backgroundColor: "#282c34",
                color: "white",
                fontSize: 14,
                minHeight: "200px",
                borderRadius: "5px",
                padding: "1rem",
                }}
            />
            </div>

            <button
            onClick={handleCompile}
            style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginBottom: "1rem",
            }}
            >
            Compile
            </button>

            <div
            style={{
                backgroundColor: "#ffffff",
                padding: "1rem",
                borderRadius: "5px",
                minHeight: "100px",
                boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
            >
            <h3>Output:</h3>
            <LivePreview />
            </div>

            <div style={{ color: "red", marginTop: "1rem" }}>
            <LiveError />
            </div>
        </LiveProvider>
        </div>
    );
};

export default ReactCompiler