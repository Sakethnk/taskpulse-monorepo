import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { microLessons } from "./courses";

type CourseTableProps = {
  courseId: number;
};

export function CourseTable({ courseId }: CourseTableProps) {
  const lessons = microLessons.filter(
    (lesson) => lesson.courseId === courseId
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Micro Lesson</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {lessons.map((lesson) => (
            <TableRow key={lesson.id}>
              <TableCell>{lesson.id}</TableCell>

              <TableCell className="font-medium">
                {lesson.title}
              </TableCell>

              <TableCell>
                <Badge variant="outline">
                  {lesson.type}
                </Badge>
              </TableCell>

              <TableCell>
                {lesson.duration}
              </TableCell>

              <TableCell>
                <Button variant="outline" size="sm">
                  {lesson.type === "Video" ? "▶ Play" : "Open"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}