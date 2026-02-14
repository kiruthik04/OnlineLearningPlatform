"use client"
import React, { useState } from 'react'
import { Button } from '../../../../components/ui/button'
import axios from 'axios'
import { Loader2Icon, SparkleIcon } from 'lucide-react'

function CourseChapterList({ course, chapters }) {
    // chapters from DB are now the source of truth
    const [loadingMap, setLoadingMap] = useState({});

    const onGenerateChapter = async (chapter, index) => {
        setLoadingMap(prev => ({ ...prev, [index]: true }));
        try {
            const result = await axios.post('/api/generate-chapter-content', {
                courseId: course?.id,
                chapterId: chapter.chapterId, // Use database chapterId
                content: chapter, // Pass the whole chapter object (name, topics)
                videoId: ''
            });
            console.log(result);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
        setLoadingMap(prev => ({ ...prev, [index]: false }));
    }

    return (
        <div className='mt-10'>
            <h2 className='font-bold text-2xl'>Chapters</h2>
            <div className='mt-5'>
                {chapters && chapters.map((chapter, index) => (
                    <div key={index} className='p-5 border rounded-lg mb-2 flex justify-between items-center'>
                        <div>
                            <h2 className='font-bold text-lg'>{chapter?.name}</h2>
                            <p className='text-sm text-gray-500'>{chapter?.duration}</p>
                            <ul className='list-disc pl-5 mt-2'>
                                {chapter?.topics?.map((topic, i) => (
                                    <li key={i} className='text-sm text-gray-400'>{topic}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {chapter.content ?
                                <Button variant="outline" className="text-green-600 border-green-600">Generated</Button>
                                :
                                <Button onClick={() => onGenerateChapter(chapter, index)} disabled={loadingMap[index]}>
                                    {loadingMap[index] ? <Loader2Icon className='animate-spin' /> : <SparkleIcon />} Generate
                                </Button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseChapterList
