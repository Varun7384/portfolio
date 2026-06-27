import {
  UserIcon,
  BriefcaseIcon,
  CodeIcon,
  FolderIcon,
  GraduationCapIcon,
  AddressBookIcon,
} from "../icons";

export const SECTION_IDS = {
  HERO: "hero",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  PROJECTS: "projects",
  EDUCATION: "education",
  CONTACT: "contact",
} as const;

export const NAV_ITEMS = [
  {
    label: "About",
    sectionId: SECTION_IDS.ABOUT,
    icon: UserIcon,
    showWhen: () => true,
  },
  {
    label: "Experience",
    sectionId: SECTION_IDS.EXPERIENCE,
    icon: BriefcaseIcon,
    showWhen: () => true,
  },
  {
    label: "Skills",
    sectionId: SECTION_IDS.SKILLS,
    icon: CodeIcon,
    showWhen: () => true,
  },
  {
    label: "Projects",
    sectionId: SECTION_IDS.PROJECTS,
    icon: FolderIcon,
    showWhen: (hasProjects: boolean) => hasProjects,
  },
  {
    label: "Education",
    sectionId: SECTION_IDS.EDUCATION,
    icon: GraduationCapIcon,
    showWhen: () => true,
  },
  {
    label: "Contact",
    sectionId: SECTION_IDS.CONTACT,
    icon: AddressBookIcon,
    showWhen: () => true,
  },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
