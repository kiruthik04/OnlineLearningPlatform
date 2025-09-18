import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../@/components/ui/select"
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/textarea";
import { Switch } from "../../../@/components/ui/switch"
import { Button } from "../../../@/components/ui/button";

function AddNewCourseDialog({ children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Course Using AI</DialogTitle>
                    <DialogDescription asChild>
                        <div className='flex flex-col gap-3 mt-5'>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Course Title</label>
                                <Input placeholder="Enter course title" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Course Description (Optional)</label>
                                <Textarea placeholder="Enter course description" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Number of Chapters</label>
                                <Input placeholder="Enter number of chapters" type="number" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-bold">Include Video:</label>
                                <Switch />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-bold">Difficulty Level:</label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Difficulty Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Easy</SelectItem>
                                        <SelectItem value="intermediate">Medium</SelectItem>
                                        <SelectItem value="advanced">Hard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Category:</label>
                                <Input placeholder="Eg: Technology, Business" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Target Audience:</label>
                                <Textarea placeholder="Who is this course for?" />
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <Button className="mt-4">Create Course</Button>
            </DialogContent>
        </Dialog >
    )
}
export default AddNewCourseDialog;