export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Student Square Activities",
    description: "Community engagement and social development initiatives",
    image: "/images/hero/student-square-one-minute-investment-project.jpg",
    category: "Community Development",
    link: "/projects/student-square-activities"
  },
  {
    id: 2,
    title: "Emergency Training Program",
    description: "Comprehensive emergency response training and awareness",
    image: "/images/hero/emergency-tran-bitoron-activities.jpg",
    category: "Training & Education",
    link: "/projects/emergency-training"
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description: "Tree plantation and environmental awareness campaigns",
    image: "/images/hero/tree-plantation-by-student-square.jpg",
    category: "Environment",
    link: "/projects/environmental-conservation"
  },
  {
    id: 4,
    title: "Educational Workshops",
    description: "School sessions and teacher development programs",
    image: "/images/hero/student-square-school-session.jpg",
    category: "Education",
    link: "/projects/educational-workshops"
  },
  {
    id: 5,
    title: "Community Counseling",
    description: "Group counseling workshops for social development",
    image: "/images/hero/Student-square-16th-group-counselling-workshop-godagari-rajshahi.jpg",
    category: "Mental Health",
    link: "/projects/community-counseling"
  },
  {
    id: 6,
    title: "Regional Development",
    description: "District-level development and awareness programs",
    image: "/images/hero/student-square-at-kustia-district.jpg",
    category: "Regional Development",
    link: "/projects/regional-development"
  }
];
