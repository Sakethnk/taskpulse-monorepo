export type Course = {
  id: number;
  title: string;
  description: string;
  domain: "Technology" | "Vedic";
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  instructor: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "HTML Fundamentals",
    description: "Learn the foundations of building web pages with HTML.",
    domain: "Technology",
    level: "Beginner",
    lessons: 10,
    duration: "1h 30m",
    instructor: "TaskPulse Academy",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Learn the core concepts of JavaScript programming.",
    domain: "Technology",
    level: "Beginner",
    lessons: 15,
    duration: "2h 30m",
    instructor: "TaskPulse Academy",
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Learn components, props, state and hooks in React.",
    domain: "Technology",
    level: "Intermediate",
    lessons: 12,
    duration: "2h 15m",
    instructor: "TaskPulse Academy",
  },
  {
    id: 4,
    title: "TypeScript Basics",
    description: "Learn types, interfaces and other TypeScript fundamentals.",
    domain: "Technology",
    level: "Intermediate",
    lessons: 14,
    duration: "2h 20m",
    instructor: "TaskPulse Academy",
  },
  {
    id: 5,
    title: "Panini Shiksha",
    description: "An introduction to the principles of Sanskrit phonetics.",
    domain: "Vedic",
    level: "Beginner",
    lessons: 4,
    duration: "1h 45m",
    instructor: "TaskPulse Academy",
  },
  {
    id: 6,
    title: "Ashtadhyayi",
    description: "Explore the foundational concepts of Panini's Ashtadhyayi.",
    domain: "Vedic",
    level: "Advanced",
    lessons: 100,
    duration: "48h 30m",
    instructor: "TaskPulse Academy",
  },
  {
    id: 7,
    title: "Vedas Introduction",
    description: "An introductory exploration of the four Vedas.",
    domain: "Vedic",
    level: "Beginner",
    lessons: 12,
    duration: "2h",
    instructor: "TaskPulse Academy",
  },
];