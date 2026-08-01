import { projects, type Project } from "@/content/projects";
import { testimonials, type Testimonial } from "@/content/testimonials";

/**
 * Data access layer.
 *
 * Today these return local placeholder content. When real data arrives
 * (CMS, API, or database), swap the implementation here — the page
 * components and their skeleton states already handle async loading
 * via <Suspense>.
 */

export async function getProjects(): Promise<Project[]> {
  // e.g. return fetch("https://cms.example.com/projects").then(r => r.json())
  return projects;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}
