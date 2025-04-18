import { assemblyClient } from "@/lib/assembly";
import { genAI } from "@/lib/gemini";
import httpClient from "@/lib/httpClient";
import { randomUUID } from "crypto";

export const generateMeetingSummary = async (
  videoLink: string,
  uid: string
) => {
  try {
    const transcriptData = await assemblyClient.transcripts.transcribe({
      audio_url: videoLink,
    });

    const rawText = transcriptData.text ?? "";

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

      const dbResponse = await httpClient.post("/aiSummarizeReport", {
        meeting_id: randomUUID(),
        participant: uid,
        summary,
      });

      if (dbResponse.status === 200) {
        return summary;
      }
    }
  } catch (error) {
    console.error("Error during transcription/summarization:", error);
  }
};
