import Project from "./Project";
import projects from "@/lib/projects";

// TODO: Proper container or wrapper
// FIX: Type errors

export default function Container() {
  return projects.map((project: Project, i) => {
    return <Project key={i} params={{ project: project }} />;
  });
}
