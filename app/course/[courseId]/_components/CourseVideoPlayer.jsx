"use client"
import React from 'react'

function CourseVideoPlayer({ activeChapterIndex, chapterDetails, content }) {

    return (
        <div className='p-5'>
            <div className='border rounded-lg p-5'>
                <h2 className='text-2xl font-bold mb-3'>{chapterDetails?.name}</h2>
                {/* Video Player Placeholder */}
                <div className='w-full h-[400px] bg-black rounded-lg mb-5 flex items-center justify-center text-white'>
                    Video Player (Coming Soon)
                </div>

                {/* Content Rendering */}
                <div>
                    <h3 className='font-bold text-xl mb-3'>Content</h3>
                    {content ? (
                        <div>
                            {content?.sections?.map((section, index) => (
                                <div key={index} className='mb-5'>
                                    <h4 className='font-bold text-lg'>{section.title}</h4>
                                    <p className='text-gray-700 whitespace-pre-wrap'>{section.content}</p>
                                    {section.code_example && (
                                        <pre className='bg-gray-900 text-white p-4 rounded-md mt-2 overflow-x-auto'>
                                            {section.code_example}
                                        </pre>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-gray-400'>No content available for this chapter.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CourseVideoPlayer
