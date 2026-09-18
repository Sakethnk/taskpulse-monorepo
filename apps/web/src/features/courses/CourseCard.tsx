import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import type { Course } from "./courses";

type CourseCardProps = {
  course: Course;
  onViewCourse: (course: Course) => void;
};

export function CourseCard({
  course,
  onViewCourse,
}: CourseCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>

        <CardDescription>
          {course.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="flex gap-2">
          <Badge variant="secondary">
            {course.domain}
          </Badge>

          <Badge variant="outline">
            {course.level}
          </Badge>
        </div>

        <div className="space-y-2">
          <p className="text-sm">
            <strong>Lessons:</strong> {course.lessons}
          </p>

          <p className="text-sm">
            <strong>Duration:</strong> {course.duration}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={() => onViewCourse(course)}
        >
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
}