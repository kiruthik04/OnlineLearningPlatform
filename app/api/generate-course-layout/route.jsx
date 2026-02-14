import { db } from '../../../config/db';
import { coursesTable, chaptersTable } from '../../../config/schema';
import { currentUser } from '@clerk/nextjs/server';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  baseURL: process.env.LLAMA_API_URL,
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

const PROMPT = `Generate Learning Course depends on following details. In which Make sure to add Course Name, Description, Course Banner Image Prompt (Create a modern, flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to user Course, like sticky notes, design components, and visual aids. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in 3D format, Chapter Name, Topic under each chapters, Duration for each chapters etc, in JSON format only.

Schema:

{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",
    "bannerImagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": ["string"]
      }
    ]
  }
}

User Input:
`;

export async function POST(req) {
  const formData = await req.json();
  const user = await currentUser();

  const completion = await openai.chat.completions.create({
    model: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    messages: [
      {
        role: 'user',
        content: PROMPT + JSON.stringify(formData),
      },
    ],
  });

  const RawResp = completion.choices[0]?.message?.content || '{}';
  const RawJson = RawResp.replace('```json', '').replace('```', '');
  const JSONResp = JSON.parse(RawJson);

  // Insert Course
  const result = await db.insert(coursesTable).values({
    name: formData.name,
    category: formData.category,
    level: formData.level,
    includeVideo: formData.includeVideo,
    noOfChapters: formData.noOfChapters,
    cid: crypto.randomUUID(),
    courseBanner: JSONResp?.course?.bannerImagePrompt,
    // coursesJson removed
    userEmail: user?.primaryEmailAddress?.emailAddress
  }).returning({ id: coursesTable.id });

  const courseId = result[0].id;

  // Insert Chapters
  if (JSONResp?.course?.chapters) {
    for (const [index, chapter] of JSONResp.course.chapters.entries()) {
      await db.insert(chaptersTable).values({
        courseId: courseId,
        chapterId: index,
        name: chapter.chapterName,
        duration: chapter.duration,
        topics: chapter.topics,
        videoId: 'pending',
        content: null // Content generated later
      });
    }
  }

  return NextResponse.json({ result: result[0] });
}
