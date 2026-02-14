import React from 'react'
import Image from 'next/image'

function CourseBasicInfo({ course }) {
    return (
        <div className='p-10 border rounded-xl shadow-sm mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <h2 className='font-bold text-3xl'>{course?.name}</h2>
                    <p className='text-gray-500 mt-2'>{course?.description}</p>
                    <div className='mt-2'>
                        Category: {course?.category} <br />
                        Level: {course?.level} <br />
                        Chapters: {course?.noOfChapters}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseBasicInfo
