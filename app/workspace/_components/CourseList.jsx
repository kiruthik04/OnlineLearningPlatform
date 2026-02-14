"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import AddNewCourseDialog from "./AddNewCourseDialog";

import React from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import AddNewCourseDialog from "./AddNewCourseDialog";
import Link from "next/link";

function CourseList({ courseList }) {

    return (
        <div className='mt-10'>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-3xl">Course List</h2>
                <AddNewCourseDialog>
                    <Button>+ Add Course</Button>
                </AddNewCourseDialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {courseList?.length > 0 ? courseList.map((course, index) => (
                    <Link href={'/course/' + course.id + '/start'} key={index}>
                        <div className="border rounded-lg p-5 shadow-sm hover:scale-105 transition-all cursor-pointer bg-white">
                            <Image src={course.courseBanner || '/online-education.png'} alt="banner" width={300} height={200}
                                className="w-full h-[200px] object-cover rounded-lg" />
                            <div className="mt-2">
                                <h2 className="font-bold text-lg">{course.name}</h2>
                                <h2 className="text-sm text-gray-500">{course.category}</h2>
                                <h2 className="text-sm text-primary mt-2">{course.noOfChapters} Chapters</h2>
                                <h2 className="text-sm text-gray-400 mt-2">{course.level}</h2>
                            </div>
                        </div>
                    </Link>
                    // Note: Link wraps the whole card. If I want a separate button, I need to adjust.
                    // Let's restructure to have the card clickable for "Start" and a small "Edit" icon/button.
                    // Actually, simpler: Just keep it as is, but maybe change the link to '/create-course/' + course.id if I want to edit.
                    // But the user asked for "complete working", implying correct flow.
                    // If the course is not fully generated, they should probably go to create-course.
                    // But if it is, they want to start.
                    // Let's just keep 'Start' for now, but maybe the user can navigate via sidebar if I implement one?
                    // The CourseList likely needs to be the main entry.
                    // Let's stick to 'Start' for now, as 'Edit' might be confusing if they just want to learn.
                    // Wait, the "generated" check I mentioned.
                    // Let's just add a small edit icon at top right of the card.
                    /* 
                    <div className="absolute top-2 right-2">
                       <Link href={'/create-course/'+course.id}><EditIcon /></Link>
                    </div>
                    */
                    // Need to import EditIcon.
                    // Let's just leave it for now to avoid complexity unless requested.
                    // The user said "remove unwanted things". Maybe "Edit" is unwanted if they just want to consume?
                    // But they are the creator.
                    // Okay, I will leave it as is for now. The previous replacement was fine.
                )) :
                    <div className='col-span-full flex p-7 items-center justify-center flex-col rounded-2xl border-2 border-dashed border-gray-300 mt-5 bg-secondary'>
                        <Image
                            src="/online-education.png"
                            alt="edu"
                            width={80}
                            height={80}
                        />
                        <h2 className="my-2 text-xl font-bold">Look like you haven't enrolled in any courses yet.</h2>
                        <AddNewCourseDialog>
                            <Button>+ Create your first Course</Button>
                        </AddNewCourseDialog>
                    </div>
                }
            </div>
        </div>
    );
}

export default CourseList;
