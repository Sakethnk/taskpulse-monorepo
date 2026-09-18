import { courses } from "./courses";
import type { Course } from "./courses";
import { CourseCard } from "./CourseCard";

type CourseListProps = {
  onViewCourse: (course: Course) => void;
};

export function CourseList({
  onViewCourse,
}: CourseListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onViewCourse={onViewCourse}
        />
      ))}
    </div>
  );
}