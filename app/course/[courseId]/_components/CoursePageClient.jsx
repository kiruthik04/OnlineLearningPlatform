"use client"
import React, { useState } from 'react'
import ChapterNav from './ChapterNav'
import CourseVideoPlayer from './CourseVideoPlayer'

function CoursePageClient({ course, chapters }) {
    const [activeChapter, setActiveChapter] = useState(0);

    // Filter content for active chapter
    // chaptersTable has: chapterId (int), content (json)
    // course.coursesJson.course.chapters has: chapterName, etc.

    // We match by index (chapterId)
    // In normalized schema, chapters are fetched and passed as prop
    // We assume they are ordered by chapterId

    const activeChapterData = chapters?.find(c => c.chapterId === activeChapter);
    const chapterContent = activeChapterData?.content;
    const chapterDetails = activeChapterData;

    return (
        <div className='flex'>
            <div className='w-64 hidden md:block border-r h-screen shadow-sm overflow-y-scroll fixed'>
                <ChapterNav
                    course={course}
                    chapters={chapters}
                    activeChapter={activeChapter}
                    setActiveChapter={setActiveChapter}
                />
            </div>
            <div className='md:ml-64 p-10 w-full'>
                <CourseVideoPlayer
                    activeChapterIndex={activeChapter}
                    chapterDetails={chapterDetails}
                    content={chapterContent}
                />
            </div>
        </div>
    )
}

export default CoursePageClient
