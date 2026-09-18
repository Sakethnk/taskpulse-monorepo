import { CourseCard } from "./CourseCard";
import type { Course } from "./courses";

type CourseListProps = {
  courses: Course[];
};

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}