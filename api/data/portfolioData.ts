// const project_data = [
//   {
//     id: "warehouse-chatbot",
//     title: "Warehouse Inventory Chatbot",
//     description:
//       "A WhatsApp-based chatbot that allows customers to browse warehouse inventory, check stock availability, calculate order totals, and place orders through a conversational interface.",
//     technologies: [
//       "Node.js",
//       "TypeScript",
//       "Express",
//       "MongoDB",
//       "WhatsApp API",
//     ],
//     githubUrl: "",
//     liveUrl: "",
//     featured: true,
//   },
//   {
//     id: "portfolio",
//     title: "Developer Portfolio",
//     description:
//       "A full-stack portfolio website built with React and Node.js. Content is fetched dynamically from APIs, allowing projects, experience, and skills to be updated without redeployment.",
//     technologies: ["React", "TypeScript", "Node.js", "Express", "React Query"],
//     githubUrl: "",
//     liveUrl: "",
//     featured: true,
//   },
//   {
//     id: "fire-calculator",
//     title: "FIRE & Investment Calculator",
//     description:
//       "A financial planning application supporting FIRE calculations, SIP planning, EMI calculations, lump-sum investments, compound interest projections, and retirement corpus estimation.",
//     technologies: ["React", "TypeScript", "Node.js", "Chart.js"],
//     githubUrl: "",
//     liveUrl: "",
//     featured: false,
//   },
//   {
//     id: "movie-db",
//     title: "Movie Database App",
//     description:
//       "A movie discovery platform that integrates external movie APIs to display trending, popular, and upcoming movies with search, filtering, and detailed movie information.",
//     technologies: ["React", "JavaScript", "REST API", "CSS"],
//     githubUrl: "",
//     liveUrl: "",
//     featured: false,
//   },
//   {
//     id: "task-manager",
//     title: "Task Management Application",
//     description:
//       "A full-stack task management system supporting authentication, CRUD operations, task tracking, and role-based access control.",
//     technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
//     githubUrl: "",
//     liveUrl: "",
//     featured: false,
//   },
// ];

export const portfolioData = {
  profile: {
    name: "Varun Boddula",
    title: "Software Engineer",
    heroSummary:
      "Building backend services, microservices, and scalable APIs using TypeScript, Node.js, MongoDB, SQL, Redis, Prisma, and Mongoose.",
    aboutSummary:
      "Software Engineer with experience building backend services, microservices, and scalable APIs. Skilled in designing RESTful APIs, optimizing database operations, integrating caching solutions, and developing maintainable software using TypeScript, Node.js, MongoDB, SQL, Redis, Prisma, and Mongoose. Passionate about backend architecture, system design fundamentals, and scalable application development.",
    email: "varun99638@gmail.com",
    phone: "9963873840",
    linkedinUrl: "https://www.linkedin.com/in/varunboddula",
    resumeUrl: "/Varun_Boddula_Software_Engineer_Resume.pdf",
    location: "Warangal, Telangana, India",
    stats: {
      experienceYears: "1+",
      apisDelivered: "20+",
      microservices: "8+",
    },
    strengths: [
      "Backend Development",
      "API Development",
      "Microservices",
      "Database Optimization",
      "System Design Fundamentals",
    ],
  },
  projects: [],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python"],
    },
    {
      category: "Backend & Architecture",
      items: [
        "Node.js",
        "RESTful APIs",
        "Microservices Architecture",
        "Controller-Service-Repository Pattern",
        "JWT Authentication",
        "API Development",
        "API Integration",
      ],
    },
    {
      category: "Databases & Caching",
      items: ["MongoDB", "SQL", "Redis"],
    },
    {
      category: "ORM",
      items: ["Prisma", "Mongoose"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "DBeaver"],
    },
  ],
  experience: [
    {
      company: "DeviceThread Inc.",
      role: "Software Engineer (SDE-1)",
      startDate: "2025-04-01",
      endDate: null,
      current: true,
      technologies: [
        "TypeScript",
        "Node.js",
        "MongoDB",
        "SQL",
        "Redis",
        "Prisma",
        "Mongoose",
      ],
      achievements: [
        "Contributed to the enhancement and maintenance of 8+ backend microservices.",
        "Delivered 20+ REST APIs.",
        "Implemented new features using Controller-Service-Repository architecture.",
        "Optimized database queries and improved endpoint performance.",
        "Integrated Redis caching to reduce database load.",
        "Built reusable internal libraries.",
        "Collaborated on production issue resolution, code reviews, and API testing.",
      ],
    },
    {
      company: "NxtWave",
      role: "MERN Stack Development Trainee",
      startDate: "2024-01-01",
      endDate: "2025-03-31",
      current: false,
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Git",
        "GitHub",
      ],
      achievements: [
        "Developed and deployed MERN applications.",
        "Built REST APIs with JWT authentication.",
        "Implemented role-based access control and CRUD operations.",
        "Integrated frontend and backend systems.",
        "Managed MongoDB data models and queries.",
        "Used Git and GitHub for version control and collaboration.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech - Electrical and Electronics Engineering",
      institution: "Kakatiya Institute of Technology & Science, Warangal",
      startYear: 2021,
      endYear: 2024,
    },
    {
      degree: "Diploma - Electrical and Electronics Engineering",
      institution: "Government Polytechnic College, Warangal",
      startYear: 2018,
      endYear: 2021,
    },
  ],
};
