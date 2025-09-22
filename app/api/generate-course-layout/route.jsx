import { db } from '../../../config/db';
import { coursesTable } from '../../../config/schema';
import { currentUser } from '@clerk/nextjs/server';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
    defaultHeaders: {
        'HTTP-Referer': 'http://localhost:3000', // change to your site
        'X-Title': 'Online Learning Platform',   // change to your site/app name
    },
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
        model: 'openai/gpt-4o',
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

    // const result = await db.insert(coursesTable).values({
    //     ...formData,
    //     courseJson: response.text(),
    //     userEmail: user?.primaryEmailAddress?.emailAddress
    // })

    return NextResponse.json(JSONResp);
}
