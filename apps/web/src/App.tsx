import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { CourseList } from "./features/courses/CourseList";
import { CourseDetails } from "./features/courses/CourseDetails";
import { CourseForm } from "./features/courses/CourseForm";

import { courses } from "./features/courses/courses";
import type { Course } from "./features/courses/courses";

function CoursesPage() {
  const [filteredCourses, setFilteredCourses] =
    useState<Course[]>(courses);

  function handleSearch(domain: string, interest: string) {
    const searchText = interest.trim().toLowerCase();

    const results = courses.filter((course) => {
      const matchesDomain =
        domain === "All" || course.domain === domain;

      const matchesInterest =
        searchText === "" ||
        course.title.toLowerCase().includes(searchText) ||
        course.description.toLowerCase().includes(searchText);

      return matchesDomain && matchesInterest;
    });

    setFilteredCourses(results);
  }

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

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Available Courses
          </h2>

          {filteredCourses.length > 0 ? (
            <CourseList courses={filteredCourses} />
          ) : (
            <div className="rounded-lg border p-8 text-center">
              <h3 className="text-lg font-semibold">
                No courses found
              </h3>

              <p className="mt-2 text-muted-foreground">
                We don't currently offer this learning area.
                We may add more courses in the future.
              </p>
            </div>
          )}
        </section>

        <aside className="lg:mt-14">
          <CourseForm onSearch={handleSearch} />
        </aside>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/courses" replace />}
        />

        <Route
          path="/courses"
          element={<CoursesPage />}
        />

        <Route
          path="/courses/:courseId"
          element={<CourseDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;