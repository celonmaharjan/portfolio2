// Mock data for Celon's Portfolio

export const portfolioData = {
  personal: {
    name: "Celon Maharjan",
    title: "Software Developer",
    tagline: "Building scalable web applications with modern technologies",
    location: "Shubahal, Lalitpur",
    phone: "9846873847",
    email: "celonmaharjan1234@gmail.com",
    linkedin: "https://www.linkedin.com/in/celon-maharjan-767a04243/",
    github: "https://github.com/demon-ora",
    bio: "Experienced web developer with a passion for building engaging websites and applications. Proficient in a wide range of programming languages and frameworks. Proven track record of delivering high-quality projects on time and within budget. Committed to continuous learning and meeting new challenges."
  },
  
  experience: [
    {
      id: 1,
      company: "WorldLink",
      position: "Sr Assistant Software Developer",
      location: "Lalitpur",
      startDate: "April 2023",
      endDate: "Present",
      current: true,
      description: "Working on various enterprise projects including FTTH communication delivery service, Task Ticketing system, and Internal Mobile Applications.",
      highlights: [
        "Developed microservices including Access Control Systems and Consumer Services",
        "Built Item Consumption Admin panel and Mobile App for Field Assistants",
        "Created Scanner App for splitter box configuration and field auditing",
        "Migrated database from Oracle to PostgreSQL, converting raw queries to QueryBuilder and ORM",
        "Maintained and enhanced multiple production applications"
      ],
      technologies: ["Node.js", "React", "PostgreSQL", "Microservices", "Laravel"]
    },
    {
      id: 2,
      company: "Khalti Private Limited",
      position: "Intern",
      location: "Lalitpur",
      startDate: "December 2022",
      endDate: "April 2023",
      current: false,
      description: "Gained hands-on experience in API testing, integration, and troubleshooting while working on government projects.",
      highlights: [
        "Contributed to NNC website (government project) integration with Khalti payment gateway",
        "Tested, integrated, and troubleshooted APIs in production environment",
        "Learned to collaborate effectively in fast-paced development environment",
        "Improved and maintained existing web applications"
      ],
      technologies: ["API Integration", "Payment Gateway", "Testing", "Debugging"]
    }
  ],
  
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "jQuery", "React", "Bootstrap"],
    backend: ["Node.js", "Express", "Laravel", "CodeIgniter", "PHP"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "Linux", "RabbitMQ", "OpenTelemetry"],
    architecture: ["Microservices", "REST APIs", "ORM", "QueryBuilder"]
  },
  
  projects: [
    {
      id: 1,
      title: "BytePerks Website",
      description: "Created a full-stack website using Node.js and React. Worked as a backend developer handling server-side logic and API development.",
      technologies: ["Node.js", "React", "Express", "MongoDB"],
      link: "https://byteperks.com/",
      github: "",
      featured: true
    },
    {
      id: 2,
      title: "Killfeed Esports",
      description: "A real-time system that allows players to see live updates of eliminations during matches using OBS Studio integration.",
      technologies: ["Node.js", "WebSocket", "React", "OBS Integration"],
      link: "https://esports.byteperks.com/",
      github: "",
      featured: true
    },
    {
      id: 3,
      title: "Game Management System",
      description: "A college project for downloading, uploading, and managing games. Built with full CRUD functionality and user management.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      link: "https://celon.com.np/",
      github: "",
      featured: false
    },
    {
      id: 4,
      title: "Firebase Chat Application",
      description: "A real-time chat application built using Firebase and React with authentication and message persistence.",
      technologies: ["React", "Firebase", "Real-time Database", "Authentication"],
      link: "https://firechat-5e089.web.app/",
      github: "",
      featured: true
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "Patan Multiple Campus",
      degree: "Bachelor of Computer Application (BCA)",
      location: "Lalitpur",
      startDate: "August 2018",
      endDate: "June 2023"
    },
    {
      id: 2,
      institution: "Moonlight Secondary School",
      degree: "+2 Level",
      location: "Lalitpur",
      startDate: "November 2016",
      endDate: "May 2018"
    }
  ],
  
  languages: ["Nepali", "English", "Newari"]
};
