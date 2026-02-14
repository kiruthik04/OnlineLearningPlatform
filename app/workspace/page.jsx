import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import { db } from "../../config/db";
import { coursesTable } from "../../config/schema";
import { eq, desc } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

async function WorkspacePage() {
    const user = await currentUser();

    const courseList = await db.select().from(coursesTable)
        .where(eq(coursesTable.userEmail, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(coursesTable.id));

    return (
        <div className="p-10">
            <WelcomeBanner />
            <CourseList courseList={courseList} />
        </div>
    )
}

export default WorkspacePage;