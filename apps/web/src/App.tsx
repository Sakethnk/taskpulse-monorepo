import { useState } from "react";

import { CourseList } from "./features/courses/CourseList";
import { CourseTable } from "./features/courses/CourseTable";

import type { Course } from "./features/courses/courses";

function App() {
  const [selectedCourse, setSelectedCourse] =
    useState<Course | null>(null);

  return (
    <main className="container mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">
          TaskPulse LMS
        </h1>

        <p className="mt-2 text-muted-foreground">
          Explore our micro-learning courses.
        </p>
      </div>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Courses
        </h2>

        <CourseList
          onViewCourse={setSelectedCourse}
        />
      </section>

      {selectedCourse && (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">
              {selectedCourse.title}
            </h2>

            <p className="text-muted-foreground">
              {selectedCourse.description}
            </p>
          </div>

          <CourseTable
            courseId={selectedCourse.id}
          />
        </section>
      )}
    </main>
  );
}

export default App;