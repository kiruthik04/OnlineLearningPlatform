import React from 'react'
import { db } from '../../../config/db'
import { coursesTable, chaptersTable } from '../../../config/schema'
import { and, eq } from 'drizzle-orm'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import CourseLayout from './_components/CourseLayout'

async function CreateCourse({ params }) {
    const { courseId } = params;
    const user = await currentUser();

    const course = await db.select().from(coursesTable)
        .where(and(eq(coursesTable.id, courseId),
            eq(coursesTable.userEmail, user?.primaryEmailAddress?.emailAddress)))
        .then(res => res[0]);

    const chapters = await db.select().from(chaptersTable).where(eq(chaptersTable.courseId, courseId));

    if (!course) {
        redirect('/workspace');
    }

    return (
        <div>
            <CourseLayout course={course} chapters={chapters} />
        </div>
    )
}

export default CreateCourse
