import React, { useState } from "react";
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
    try {
      setLoading(true);

      const res = await fetch("/api/generate-course-layout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Generated course:", data);

      setLoading(false);
    } catch (error) {
      console.error("Error generating course:", error);
      setLoading(false);
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
