import { CourseList } from "./features/courses/CourseList";

function App() {
  return (
    <main className="container mx-auto space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">
          TaskPulse LMS
        </h1>

        <p className="mt-2 text-muted-foreground">
          Explore our micro-learning courses.
        </p>
      </div>

      <CourseList />
    </main>
  );
}

export default App;