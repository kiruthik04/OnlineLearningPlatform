"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

function CourseList() {
    const [courseList, setCourseList] = useState([]);

    return (
        <div className='mt-10'>
            <h2 className="font-bold text-3xl">Course List</h2>
            {courseList?.length === 0 ? 
                <div className='flex p-7 items-center justify-center flex-col rounded-2xl border-2 border-dashed border-gray-300 mt-5 bg-secondary'>
                    <Image 
                        src="/online-education.png" 
                        alt="edu" 
                        width={80} 
                        height={80} 
                    />
                    <h2 className="my-2 text-xl font-bold">Look like you haven't enrolled in any courses yet.</h2>
                    <Button>+ Create your first Course</Button>
                </div> : 
                <div>
                    List of Courses
                </div>
            }
        </div>
    );
}

export default CourseList;
