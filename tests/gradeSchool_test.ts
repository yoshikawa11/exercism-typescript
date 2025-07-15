import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { GradeSchool } from "..//answers/gradeSchool.ts";

Deno.test("adding a student adds them to correct grade", () => {
  const school = new GradeSchool();
  school.add("Aimee", 2);
  assertEquals(school.grade(2), ["Aimee"]);
});

Deno.test("adding multiple students in same grade keeps sorted order", () => {
  const school = new GradeSchool();
  school.add("Paul", 2);
  school.add("James", 2);
  school.add("Blair", 2);
  assertEquals(school.grade(2), ["Blair", "James", "Paul"]);
});

Deno.test("adding students in different grades", () => {
  const school = new GradeSchool();
  school.add("Chelsea", 3);
  school.add("Logan", 7);
  assertEquals(school.grade(3), ["Chelsea"]);
  assertEquals(school.grade(7), ["Logan"]);
});

Deno.test("grade returns empty array if no students", () => {
  const school = new GradeSchool();
  assertEquals(school.grade(1), []);
});

Deno.test("students names should be unique - adding duplicate student has no effect", () => {
  const school = new GradeSchool();
  school.add("Logan", 7);
  school.add("Logan", 7); // duplicate
  assertEquals(school.grade(7), ["Logan"]);
});

Deno.test("roster returns all students sorted by grade then name", () => {
  const school = new GradeSchool();
  school.add("Jennifer", 4);
  school.add("Kareem", 6);
  school.add("Christopher", 4);
  school.add("Kyle", 3);
  const expected = {
    3: ["Kyle"],
    4: ["Christopher", "Jennifer"],
    6: ["Kareem"],
  };
  assertEquals(school.showRoster(), expected);
});

Deno.test("adding more students maintains sorted roster", () => {
  const school = new GradeSchool();
  school.add("Aimee", 2);
  assertEquals(school.showRoster(), { 2: ["Aimee"] });
  school.add("Logan", 2);
  const expected = {
    2: ["Aimee", "Logan"],
  };
  assertEquals(school.showRoster(), expected);
});
