import commonwealth from './commonwealth';
import nineHandelHomes from './nine-handel-homes';
import type { Project } from './types';

export const projects: Project[] = [commonwealth, nineHandelHomes];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export type { Project } from './types';