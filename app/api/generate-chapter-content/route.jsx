import { NextResponse } from "next/server";
import { db } from "../../../config/db";
import { chaptersTable } from "../../../config/schema";
import { and, eq } from "drizzle-orm";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: process.env.LLAMA_API_URL,
    apiKey: process.env.HUGGINGFACE_API_KEY,
});

export async function POST(req) {
    try {
        const { courseId, chapterId, content, videoId } = await req.json();

        // Content now comes from the DB row (passed or fetched), but here 'content' param likely contains the topics 
        // as passed from frontend. 
        // In the new schema, we have 'name' and 'topics' in the row.

        const prompt = `Generate detailed content for a chapter titled "${content.name}". 
        The topics to cover are: ${content.topics && content.topics.join ? content.topics.join(', ') : content.topics}.
        Provide the content in JSON format with the following structure:
        {
          "title": "Chapter Title",
          "sections": [
            {
              "title": "Section Title",
              "content": "Detailed explanation of the section... (formatted in markdown)",
              "code_example": "Optional code snippet if relevant (in markdown code block)"
            }
          ]
        }
        Only return the JSON.`;

        const completion = await openai.chat.completions.create({
            model: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        });

        const RawResp = completion.choices[0]?.message?.content || '{}';
        const RawJson = RawResp.replace('```json', '').replace('```', '');
        const JSONResp = JSON.parse(RawJson);

        // Update the existing chapter row
        await db.update(chaptersTable)
            .set({ content: JSONResp, videoId: videoId || 'pending' })
            .where(and(eq(chaptersTable.courseId, courseId), eq(chaptersTable.chapterId, chapterId)));

        return NextResponse.json({ success: true });

    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
