import React, { useState } from "react";
import axios from 'axios';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../@/components/ui/select";
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/textarea";
import { Switch } from "../../../@/components/ui/switch";
import { Button } from "../../../@/components/ui/button";
import { Loader2Icon, SparkleIcon } from "lucide-react";

function AddNewCourseDialog({ children }) {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        noOfChapters: 1, // ✅ fixed naming
        includeVideo: false,
        level: "",
        category: "",
    });

    const onHandleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const onGenerate = async () => {
        console.log(formData);
        try {
            setLoading(true);
            const result = await axios.post("/api/generate-course-layout", {
                ...formData
            });
            console.log(result.data);
            setLoading(false);
        }
        catch(e)
        {
            setLoading(false);
            console.log(e);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Course Using AI</DialogTitle>
                    <DialogDescription asChild>
                        <div className="flex flex-col gap-3 mt-5">
                            <div className="flex flex-col gap-1">
                                <label className="font-bold">Course Title</label>
                                <Input
                                    placeholder="Enter course title"
                                    onChange={(e) => onHandleInputChange("name", e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-bold">Course Description (Optional)</label>
                                <Textarea
                                    placeholder="Enter course description"
                                    onChange={(e) => onHandleInputChange("description", e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-bold">Number of Chapters</label>
                                <Input
                                    type="number"
                                    placeholder="Enter number of chapters"
                                    onChange={(e) =>
                                        onHandleInputChange("noOfChapters", Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-bold">Include Video:</label>
                                <Switch
                                    onCheckedChange={() =>
                                        onHandleInputChange("includeVideo", !formData.includeVideo)
                                    }
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-bold">Difficulty Level:</label>
                                <Select
                                    onValueChange={(value) => onHandleInputChange("level", value)}
                                >
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
                            <div className="flex flex-col gap-1">
                                <label className="font-bold">Category:</label>
                                <Input
                                    placeholder="Eg: Technology, Business"
                                    onChange={(e) => onHandleInputChange("category", e.target.value)}
                                />
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <Button className="mt-5" onClick={onGenerate} disabled={loading}>
                    {loading ? (
                        <Loader2Icon className="animate-spin" />
                    ) : (
                        <SparkleIcon />
                    )}{" "}
                    Create Course
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddNewCourseDialog;
