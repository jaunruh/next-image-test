import { readdirSync } from "fs";
import path from "path";
import { Project } from "./types";

export function readProjects() {
  return readdirSync(path.resolve(".", "content", "projects"), {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => require(`/content/projects/${dirent.name}/content.yaml`) as Project)
    .sort((a, b) => new Date(a.projectDate) < new Date(b.projectDate) ? 1 : -1)
}

export function createUrlPath(val: string) {
  return val.replaceAll(" ", "-").toUpperCase()
}