import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import type { Course } from "./courses";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>

        <CardDescription>
          {course.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-2">
        <p className="text-sm">
          <strong>Domain:</strong> {course.domain}
        </p>

        <p className="text-sm">
          <strong>Level:</strong> {course.level}
        </p>

        <p className="text-sm">
          <strong>Lessons:</strong> {course.lessons}
        </p>

        <p className="text-sm">
          <strong>Duration:</strong> {course.duration}
        </p>
      </CardContent>

      <CardFooter>
        <Button className="w-full">
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
}