import React from 'react'
import { db } from '../../../config/db'
import { coursesTable, chaptersTable } from '../../../config/schema'
import { and, eq } from 'drizzle-orm'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

async function CourseStart({ params }) {
    const { courseId } = params;

    const course = await db.select().from(coursesTable)
        .where(eq(coursesTable.id, courseId))
        .then(res => res[0]);

    const chapters = await db.select().from(chaptersTable).where(eq(chaptersTable.courseId, courseId));

    if (!course) {
        return <div>Course not found</div>
    }

    return (
        <div className='flex flex-col items-center justify-center p-10'>
            <div className='max-w-3xl w-full border rounded-lg p-5 shadow-md'>
                <h2 className='text-3xl font-bold text-center mb-5'>{course?.name}</h2>
                <p className='text-gray-500 text-center mb-5'>{course?.description}</p>

                <div className='flex justify-center mb-5'>
                    {/* Placeholder for Banner if available */}
                    <div className='w-full h-[200px] bg-secondary rounded-lg flex items-center justify-center'>
                        Course Banner
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 mb-5'>
                    <div>
                        <h3 className='font-bold'>Category</h3>
                        <p>{course?.category}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Level</h3>
                        <p>{course?.level}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Chapters</h3>
                        <p>{course?.noOfChapters}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Total Duration</h3>
                        <p>{chapters?.length} Chapters</p>
                    </div>
                </div>

                <Link href={'/course/' + courseId}>
                    <Button className="w-full">Start Learning</Button>
                </Link>
            </div>
        </div>
    )
}

export default CourseStart
