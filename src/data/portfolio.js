// ─────────────────────────────────────────────────────────────────────────────
//  MANOJ GOGU — PORTFOLIO CONTENT
//  Everything visible on the website is editable in this single file.
//  Profile photo  → place your image at  public/profile.png
//  Resume         → place your PDF at     public/resume.pdf  (then set resume: '/resume.pdf')
//  Project links  → replace null with the real repository / demo URLs
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Manoj Gogu',
  firstName: 'Manoj',
  lastName: 'Gogu',
  initials: 'MG',
  role: 'Computer Science Engineering Student',
  title: 'Full Stack Developer | Java Developer | Aspiring Software Engineer',
  location: 'Telangana, India',
  email: 'manojgogu275@gmail.com',
  phoneDisplay: '+91-8688677175',
  phoneHref: 'tel:+918688677175',
  university: 'Anurag University, Hyderabad',
  degree: 'B.Tech Computer Science Engineering',
  duration: '2024 – 2028',
  cgpa: '8.1 / 10',
  intro:
    'I am a passionate Computer Science Engineering student interested in building innovative, scalable, and user-friendly applications. I enjoy solving problems, exploring modern technologies, and transforming ideas into practical software solutions.',
  photo: '/profile.png',
  photoAlt: 'Portrait of Manoj Gogu',
  resume: null,
  availability: 'Open to internships & opportunities',
}

// Add or update your real social profiles here. Set a URL to null to hide it.
export const socialLinks = [
  {
    label: 'GitHub',
    icon: 'github',
    url: 'https://github.com/manojgogu',
    handle: '@manojgogu',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/gogu-manoj-bb7018369',
    handle: 'Manoj Gogu',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  hello: "HELLO, I'M",
  subtitle: 'Building Digital Experiences Through Code.',
  roles: ['Full Stack Developer', 'Java Developer', 'React Developer', 'Software Engineer'],
  description:
    'Passionate Computer Science Engineering student building modern applications through creativity, problem-solving, and technology.',
  floatingTech: ['Java', 'React', 'Python', 'Spring Boot', 'Node.js'],
  stats: [
    { value: '8.1', suffix: '/10', label: 'CGPA' },
    { value: '2028', suffix: '', label: 'B.Tech CSE' },
    { value: 'Gold', suffix: '', label: 'NPTEL Java' },
  ],
}

export const about = {
  eyebrow: 'About me',
  heading: 'A developer who loves turning ideas into impact.',
  intro: profile.intro,
  body: 'My focus is on strengthening my foundations in data structures, object-oriented programming, databases, and full-stack development while building projects that solve real problems. I am looking for opportunities where I can learn from experienced engineers and contribute to meaningful products.',
  facts: [
    { label: 'University', value: 'Anurag University' },
    { label: 'Degree', value: 'B.Tech CSE' },
    { label: 'Duration', value: '2024 – 2028' },
    { label: 'CGPA', value: '8.1 / 10' },
  ],
  cards: [
    {
      icon: 'graduation',
      index: '01',
      title: 'Computer Science Engineering',
      text: 'Building a strong foundation in DSA, OOP, DBMS, operating systems, and structured problem solving.',
    },
    {
      icon: 'code',
      index: '02',
      title: 'Software Development',
      text: 'Designing and developing practical applications with clean, readable, and maintainable code.',
    },
    {
      icon: 'layers',
      index: '03',
      title: 'Full Stack Technologies',
      text: 'Exploring frontend, backend, APIs, and databases to build complete, thoughtful experiences.',
    },
    {
      icon: 'rocket',
      index: '04',
      title: 'Continuous Learning',
      text: 'Staying curious, experimenting with modern tools, and improving with every project I build.',
    },
  ],
}

export const skillGroups = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    blurb: 'The languages I use to reason about problems and turn logic into working software.',
    items: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    blurb: 'Crafting responsive, accessible interfaces that feel as good as they look.',
    items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    blurb: 'Building the server-side logic and APIs that connect experiences to data.',
    items: ['Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    blurb: 'Storing, shaping, and querying data with relational and document databases.',
    items: ['MySQL', 'MongoDB'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'tool',
    blurb: 'The everyday workflow that keeps my code organised, versioned, and shipping.',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: 'mind',
    blurb: 'The computer science fundamentals behind reliable, efficient software.',
    items: ['Data Structures', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'],
  },
]

// Project information is intentionally limited to what has been verified.
// Add real features, technologies, GitHub repos, and live demo URLs when available.
export const projects = [
  {
    id: 'campussafe',
    index: '01',
    title: 'CampusSafe',
    subtitle: 'Campus Emergency Reporting and Response Management System',
    tag: 'Campus Safety',
    description:
      'A platform designed to help students report campus emergencies and improve communication and response management.',
    features: [],
    tech: [],
    githubUrl: null,
    demoUrl: null,
    visual: 'campus',
  },
  {
    id: 'retrievo',
    index: '02',
    title: 'Retrievo',
    subtitle: 'AI-Powered Lost Item Detection and Recovery System',
    tag: 'AI + Recovery',
    description:
      'An intelligent lost-item recovery platform designed to help users report, discover, and recover lost belongings using AI-powered matching concepts.',
    features: [],
    tech: [],
    githubUrl: null,
    demoUrl: null,
    visual: 'retrievo',
  },
  {
    id: 'fitsync',
    index: '03',
    title: 'FITSync',
    subtitle: 'Gym Management System',
    tag: 'Fitness Operations',
    description:
      'A gym management platform designed to simplify gym operations, member management, and fitness-related workflows.',
    features: [],
    tech: [],
    githubUrl: null,
    demoUrl: null,
    visual: 'fitness',
  },
  {
    id: 'smartcampus',
    index: '04',
    title: 'Smart Campus',
    subtitle: 'Smart Campus Management Platform',
    tag: 'Digital Campus',
    description:
      'A smart campus solution designed to improve campus-related digital services and management through technology.',
    features: [],
    tech: [],
    githubUrl: null,
    demoUrl: null,
    visual: 'smart',
  },
]

export const education = [
  {
    place: 'Anurag University, Hyderabad',
    degree: 'B.Tech — Computer Science Engineering',
    period: '2024 – 2028',
    score: 'CGPA: 8.1 / 10',
    icon: 'graduation',
    current: true,
  },
  {
    place: 'Loyola Junior College, Karimnagar',
    degree: 'Intermediate — MPC',
    period: '2022 – 2024',
    score: 'Score: 838 / 1000',
    icon: 'book',
    current: false,
  },
  {
    place: "St. Ann's High School, Mariyapuram",
    degree: 'SSC',
    period: '2022',
    score: 'GPA: 9.3 / 10',
    icon: 'book',
    current: false,
  },
]

export const certification = {
  label: 'NPTEL Programming in Java',
  title: 'Elite + Gold Certification',
  badge: 'Gold',
  score: '92%',
  issuer: 'NPTEL',
  tags: ['Java', 'NPTEL', 'Certification'],
}

export const achievements = [
  {
    title: 'East India Blockchain Summit 2.0',
    organizer: 'IIT Kharagpur',
    tag: 'Participation',
    description:
      'Participated at IIT Kharagpur and gained exposure to blockchain technologies and industry practices.',
    icon: 'trophy',
  },
]

// These are honest, editable placeholders — no professional experience is invented.
export const experience = {
  heading: 'Experience & Activities',
  text: 'A space reserved for internships, workshops, coding activities, and technical events as the journey unfolds.',
  items: [
    {
      icon: 'briefcase',
      title: 'Internships',
      note: 'This space is ready for your next professional milestone.',
    },
    {
      icon: 'sparkles',
      title: 'Workshops',
      note: 'This space is ready for hands-on learning experiences.',
    },
    {
      icon: 'code',
      title: 'Coding Activities',
      note: 'This space is ready for contests, problem solving, and practice.',
    },
    {
      icon: 'calendar',
      title: 'Technical Events',
      note: 'This space is ready for conferences, hackathons, and meetups.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  heading: "Let's Build Something Amazing Together.",
  text: "Have an opportunity, a project idea, or simply want to connect? I'd love to hear from you.",
  formNote:
    'This form validates your message locally. Connect an email service or backend to receive submissions.',
}

export const resume = {
  heading: 'Explore My Resume',
  text: 'A concise overview of my education, technical skills, projects, certification, and achievements.',
}

export const footer = {
  tagline: 'Building ideas into digital experiences.',
  copyright: '© 2026 Manoj Gogu. All rights reserved.',
}
