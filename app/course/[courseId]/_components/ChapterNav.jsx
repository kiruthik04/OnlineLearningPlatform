"use client"
import React, { useState } from 'react'

function ChapterNav({ course, chapters, activeChapter, setActiveChapter }) {
    // If not using props for state, we can use URL params or context. 
    // For now assuming parent manages state or we use simple selection.

    return (
        <div>
            <div className='border-b p-5'>
                <h2 className='font-bold text-xl'>{course?.name}</h2>
                <p className='text-gray-500 text-sm'>{course?.category}</p>
            </div>
            <div>
                {chapters && chapters.map((chapter, index) => (
                    <div key={index}
                        onClick={() => setActiveChapter(index)}
                        className={`p-4 hover:bg-gray-100 cursor-pointer 
                ${activeChapter === index ? 'bg-green-100 text-green-700 font-bold' : ''}`}>
                        <h2>{chapter.name}</h2>
                        <p className='text-xs text-gray-500'>{chapter.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChapterNav
