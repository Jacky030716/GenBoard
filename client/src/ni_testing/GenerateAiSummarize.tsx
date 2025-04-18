import { useEffect, useState } from "react";
import { AssemblyAI } from "assemblyai";
import { GoogleGenAI } from "@google/genai";

const AssemblyAI_API_KEY = import.meta.env.VITE_ASSEMBLYAI_API_KEY!;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY!;

if (!AssemblyAI_API_KEY || !GEMINI_API_KEY) {
  throw new Error("API keys are missing");
}

// Setup AssemblyAI client
const assemblyClient = new AssemblyAI({
  apiKey: AssemblyAI_API_KEY,
});

// Setup Gemini client
const genAI = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const GenerateAiSummarize = ({ videoLink }: { videoLink: string }) => {
  const [transcript, setTranscript] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  useEffect(() => {
    const getTranscriptAndSummary = async () => {
      try {
        const transcriptData = await assemblyClient.transcripts.transcribe({
          audio_url: videoLink,
        });

        const rawText = transcriptData.text ?? "";
        setTranscript(rawText);

        if (rawText.length > 0) {
          const prompt = `
            I will give you a meeting transcript. Summarize it in the following JSON format:
            {
              "title": "",
              "keyPoint": "",
              "decision": "",
              "actionItem": "",
              "nextStep": ""
            }
            You can refer to the following instructions to summarize the transcript:
            1. Meeting Title: Provide a short title describing the purpose of the meeting.
            2. Key Discussion Points: Summarize the main points discussed in bullet format.
            3. Decisions Made: List any decisions or agreements reached during the meeting.
            4. Action Items: List assigned tasks in the format:
              - Task: [Task description]
                - Assigned to: [Person]
                - Deadline: [Date]
            5. Next Steps: Describe any planned follow-ups or next meetings.

            Here is the transcript:
            """${rawText}"""
          `;
          const response = await genAI.models.generateContent({
            model: "gemini-1.5-pro-latest",
            contents: prompt,
          });

          let raw = response.text ?? "";

          // ✅ Remove markdown formatting (```json ... ```)
          raw = raw.trim();
          if (raw.startsWith("```json")) {
            raw = raw
              .replace(/^```json/, "")
              .replace(/```$/, "")
              .trim();
          } else if (raw.startsWith("```")) {
            raw = raw.replace(/^```/, "").replace(/```$/, "").trim();
          }

          const summary = JSON.parse(raw);
          setSummary(JSON.stringify(summary, null, 2));
          console.log("Summary:", summary);
        }
      } catch (error) {
        console.error("Error during transcription/summarization:", error);
      }
    };

    getTranscriptAndSummary();
  }, [videoLink]);

  return (
    <div>
      <h1>Transcription</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{transcript}</p>

      <h2>Summary</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{summary}</p>
    </div>
  );
};

export default GenerateAiSummarize;
