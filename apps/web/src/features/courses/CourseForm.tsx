import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CourseFormProps = {
  onSearch: (domain: string, interest: string) => void;
};

export function CourseForm({ onSearch }: CourseFormProps) {
  const [domain, setDomain] = useState("All");
  const [interest, setInterest] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSearch(domain, interest);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Find a Course</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="domain">
              Area of Interest
            </Label>

            <select
              id="domain"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="All">All Areas</option>
              <option value="Technology">Technology</option>
              <option value="Vedic">Vedic</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">
              What would you like to learn?
            </Label>

            <Input
              id="interest"
              placeholder="e.g. React, Vedas, Sanskrit..."
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
            />
          </div>

          <Button type="submit">
            Find Courses
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}