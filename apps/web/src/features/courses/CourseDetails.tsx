import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { CourseTable } from "./CourseTable";
import { courses } from "./courses";

export function CourseDetails() {
  const { courseId } = useParams();

  const course = courses.find(
    (course) => course.id === Number(courseId)
  );

  if (!course) {
    return (
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Course not found
        </h1>

        <Button asChild className="mt-4">
          <Link to="/courses">
            Back to Courses
          </Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="container mx-auto space-y-8 p-6">
      <Button variant="outline" asChild>
        <Link to="/courses">
          ← Back to Courses
        </Link>
      </Button>

      <section className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">
            {course.title}
          </h1>

          <p className="mt-2 text-muted-foreground">
            {course.description}
          </p>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">
            {course.domain}
          </Badge>

          <Badge variant="outline">
            {course.level}
          </Badge>
        </div>

        <div className="flex gap-6 text-sm">
          <span>
            <strong>Lessons:</strong> {course.lessons}
          </span>

          <span>
            <strong>Duration:</strong> {course.duration}
          </span>
        </div>

        <Button>
          Enroll
        </Button>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">
            Micro-Learning Content
          </h2>

          <p className="text-muted-foreground">
            Learn this course through short lessons.
          </p>
        </div>

        <CourseTable courseId={course.id} />
      </section>
    </main>
  );
}