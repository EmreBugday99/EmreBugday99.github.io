// Shared data shapes for JSON payloads

export type AboutData = { title: string; description: string };

export type WhyHireData = {
    title: string;
    subtitle: string;
    uspCards: { icon: string; title: string; description: string }[];
};

export type ProjectsData = {
    title: string;
    projects: { title: string; description: string; link: string; linkText: string }[];
};

export type ClientsData = {
    title: string;
    clients: { title: string; description: string; link: string; linkText: string }[];
};

export type SkillsData = { title: string; skills: string[] };
