import React from 'react'
import { db } from '../../../config/db'
import { coursesTable, chaptersTable } from '../../../config/schema'
import { and, eq } from 'drizzle-orm'
import CoursePageClient from './_components/CoursePageClient'

async function CoursePage({ params }) {
    const { courseId } = params;

    const course = await db.select().from(coursesTable)
        .where(eq(coursesTable.id, courseId))
        .then(res => res[0]);

    const chapters = await db.select().from(chaptersTable).where(eq(chaptersTable.courseId, courseId));

    if (!course) {
        return <div>Course not found</div>
    }

    return (
        <div>
            <CoursePageClient course={course} chapters={chapters} />
        </div>
    )
}

export default CoursePage
