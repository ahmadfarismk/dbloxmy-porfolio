/**
 * Team members.
 * Photos live in /public/team/ — square, face-centred, 512px.
 * Set `avatar` to null and an initialed avatar renders instead.
 */

export interface TeamMember {
  name: string;
  role: string;
  avatar: string | null;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Danial Iman",
    role: "Founder, D'Blox Malaysia",
    avatar: "/team/danial.jpg",
  },
  {
    name: "Ahmad Faris",
    role: "Lead Programmer",
    avatar: "/team/faris.jpg",
  },
  {
    name: "Syakir Muzaffar",
    role: "Programmer & UI/UX Designer",
    avatar: "/team/syakir.jpg",
  },
  {
    name: "Kamarul Ariffin",
    role: "Administrative Assistant",
    avatar: "/team/kamarul.jpg",
  },
];
