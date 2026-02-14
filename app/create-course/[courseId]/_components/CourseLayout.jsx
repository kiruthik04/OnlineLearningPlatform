import React from 'react'
import CourseBasicInfo from './CourseBasicInfo'
import CourseChapterList from './CourseChapterList'
import { Button } from '../../../components/ui/button'
import { GenerateChapterContent } from './GenerateChapterContent'

function CourseLayout({ course, chapters }) {
    return (
        <div className='mt-10 max-w-5xl mx-auto'>
            <CourseBasicInfo course={course} />
            <CourseChapterList course={course} chapters={chapters} />
        </div>
    )
}

export default CourseLayout
