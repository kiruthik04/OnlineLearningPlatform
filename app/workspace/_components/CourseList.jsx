"use client"
import React, { useState } from "react";
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
                {courseList?.length > 0 ? (
                    courseList.map((course, index) => (
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
                    ))
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default CourseList;
