/**
 * Team members — replace names/roles with the real crew.
 * `avatar` accepts a /public path; while null an initialed avatar renders.
 */

export interface TeamMember {
  name: string;
  role: string;
  avatar: string | null;
}

export const teamMembers: TeamMember[] = [
  { name: "Founder Name", role: "Founder & Studio Lead", avatar: null },
  { name: "Developer Name", role: "Lead Programmer", avatar: null },
  { name: "Artist Name", role: "3D Artist & World Builder", avatar: null },
  { name: "Designer Name", role: "UI/UX Designer", avatar: null },
];
