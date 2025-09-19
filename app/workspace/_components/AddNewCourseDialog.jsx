import React, { useState  } from "react";
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
import { SparkleIcon } from "lucide-react";
import { desc } from "drizzle-orm";

function AddNewCourseDialog({ children }) {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        noOfChapter: 1,
        includeVideo: false,
        level: '',
        category: ''
    });

    const onHandleInputChange = (field, value) => {
        setFormData(pre => ({
            ...pre,
            [field]: value
        }));
        console.log(formData);
    }

    const onGenerate = () => {
        console.log(formData);
        // API call to generate course using AI
    }
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
                                <Input placeholder="Enter course title"
                                    onChange={(event) => onHandleInputChange('name', event?.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Course Description (Optional)</label>
                                <Textarea placeholder="Enter course description"
                                    onChange={(event) => onHandleInputChange('description', event?.target.value)} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className="font-bold">Number of Chapters</label>
                                <Input placeholder="Enter number of chapters" type="number"
                                    onChange={(event) => onHandleInputChange('noOfChapter', event?.target.value)} />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-bold">Include Video:</label>
                                <Switch
                                    onCheckedChange={() => onHandleInputChange('includeVideo', !formData?.includeVideo)} />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-bold">Difficulty Level:</label>
                                <Select onValueChange={(value) => onHandleInputChange('level', value)}>
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
                                <Input placeholder="Eg: Technology, Business"
                                    onChange={(event) => onHandleInputChange('category', event?.target.value)} />
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <Button className="mt-5" onClick={onGenerate}> <SparkleIcon /> Create Course</Button>
            </DialogContent>
        </Dialog >
    )
}
export default AddNewCourseDialog;