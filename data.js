export const navigation = [
  { label: "Top", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  summary:
    "I design and build software that feels intentional on the surface and dependable underneath, spanning web apps, mobile products, backend systems, and developer tooling.",
  actions: [
    {
      label: "Download resume",
      href: "assets/ahmed_riyadh_resume.pdf",
      className: "primary",
      icon: "fa-solid fa-file-arrow-down",
      download: true,
    },
    {
      label: "View projects",
      href: "#projects",
      className: "secondary",
      icon: "fa-solid fa-eye",
    },
  ],
};

export const intro = {
  title: "Full Stack Developer at Go2 Global since 05/2023, Software Engineering graduate from MMU.",
  copy:
    "This is my main portfolio. I currently work at Go2 Global Sdn Bhd in Cyberjaya, Malaysia as a Full Stack Developer from 05/2023 to the present, and I completed my Software Engineering studies at Multimedia University (MMU) in Cyberjaya, Malaysia.",
};

export const profile = {
  about:
    "I enjoy turning simple ideas into clean, high-contrast digital experiences, from small utilities to full products. My work balances structure, accessibility, performance, open-source curiosity, and a little controlled visual weirdness.",
  socials: [
    { label: "Email", shortLabel: "EM", icon: "fa-solid fa-envelope", href: "mailto:ahriyadh19@gmail.com" },
    { label: "Phone", shortLabel: "PH", icon: "fa-solid fa-phone", href: "tel:+601119234237" },
    { label: "LinkedIn", shortLabel: "LI", icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/ahriyadh19/" },
    { label: "GitHub", shortLabel: "GH", icon: "fa-brands fa-github", href: "https://github.com/ahriyadh19" },
    { label: "Facebook", shortLabel: "FB", icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/ahriyadh19" },
    { label: "Instagram", shortLabel: "IG", icon: "fa-brands fa-instagram", href: "https://www.instagram.com/ahriyadh19" },
    { label: "Twitter", shortLabel: "X", icon: "fa-brands fa-x-twitter", href: "https://twitter.com/ahriyadh19" },
    { label: "WakaTime", shortLabel: "WK", icon: "simple-icons:wakatime", href: "https://wakatime.com/@ahriyadh19" },
    { label: "Telegram", shortLabel: "TG", icon: "fa-brands fa-telegram", href: "https://t.me/ahriyadh19" },
    { label: "WhatsApp", shortLabel: "WA", icon: "fa-brands fa-whatsapp", href: "https://wa.me/message/POCA2ZY4IN4BN1" },
    { label: "Messenger", shortLabel: "MS", icon: "fa-brands fa-facebook-messenger", href: "https://m.me/ahriyadh19" },
  ],
};

export const message = {
  copy:
    "Hello. Thanks for visiting. I’m a software engineer who likes turning ideas into real systems that are easy to maintain, easy to understand, and ready to grow. I build with tools like Laravel, Next.js, Flutter, Supabase, and JavaScript-heavy frontend stacks, always aiming for quality without unnecessary complexity.",
};

export const stats = [
  { value: "3+", label: "Years coding" },
  { value: "20+", label: "Projects built" },
  { value: "Remote / freelance", label: "Preferred collaborations" },
];

export const principles = [
  {
    title: "Clean foundations",
    copy: "Readable code, modular structure, and predictable interfaces come before visual flair.",
  },
  {
    title: "Purposeful motion",
    copy: "Animations should guide attention, add rhythm, and never fight performance or accessibility.",
  },
  {
    title: "Built for growth",
    copy: "I prefer systems that can start simple and scale into larger products without a rewrite.",
  },
];

export const experience = [
  {
    icon: "fa-solid fa-briefcase",
    company: "Go2 Global Sdn Bhd",
    location: "Cyberjaya, Malaysia",
    role: "Full Stack Developer",
    period: "05/2023 - Present",
    tags: ["Web apps", "Databases", "Delivery"],
    highlights: [
      "Designing and developing client-side and server-side web applications.",
      "Coding, troubleshooting, and optimizing software solutions.",
      "Manual testing to validate code quality and system reliability.",
      "Managing and maintaining databases for data integrity, security, and performance.",
      "Collaborating on project requirements, timelines, and version control practices.",
    ],
  },
  {
    icon: "fa-solid fa-laptop-code",
    company: "Freelancer",
    location: "Online",
    role: "Software Engineer",
    period: "01/2022 - Present",
    tags: ["Client work", "Full stack", "Support"],
    highlights: [
      "Developed custom software solutions to meet specific client needs.",
      "Tested and debugged deliverables to keep product quality high.",
      "Collaborated directly with clients to shape tailored solutions.",
      "Handled full-stack implementation across multiple tools and languages.",
      "Provided ongoing support and maintenance after delivery.",
    ],
  },
];

export const education = [
  {
    icon: "fa-solid fa-graduation-cap",
    school: "Multimedia University - MMU",
    location: "Cyberjaya, Malaysia",
    degree: "Software Engineering",
    period: "Completed",
    tags: ["Software engineering", "Application development", "Product thinking"],
    details: [
      "Focused on software engineering foundations, application development, and long-term product thinking.",
    ],
  },
];

export const projects = [
  {
    icon: "fa-solid fa-code",
    name: "JSON Explorer",
    description: "A utility for inspecting nested JSON structures quickly with a cleaner developer workflow.",
    tech: ["Next.js", "TypeScript"],
    tags: ["tooling", "data"],
    state: "Live",
    url: "https://json-explorer-orpin.vercel.app/",
  },
  {
    icon: "fa-solid fa-code-compare",
    name: "Keyset Compare",
    description: "A compact comparison tool for spotting key mismatches across object shapes and datasets.",
    tech: ["Next.js", "TypeScript"],
    tags: ["utility", "diff"],
    state: "Live",
    url: "https://keyset-compare.vercel.app/",
  },
  {
    icon: "fa-solid fa-key",
    name: "Password Generator",
    description: "A fast generator for producing strong, customizable passwords with minimal friction.",
    tech: ["Next.js", "TypeScript"],
    tags: ["security", "generator"],
    state: "Live",
    url: "https://password-generator-weld.vercel.app/",
  },
  {
    icon: "fa-solid fa-camera",
    name: "Scan Flow",
    description: "A browser-based scanner workflow for handling document and image capture with a cleaner flow.",
    tech: ["Next.js", "TypeScript"],
    tags: ["scanner", "workflow"],
    state: "Live",
    url: "https://scan-flow-one.vercel.app/",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    copy: "Interfaces that stay responsive, readable, and expressive.",
    items: [
      { label: "React", icon: "simple-icons:react" },
      { label: "Next.js", icon: "simple-icons:nextdotjs" },
      { label: "Flutter", icon: "simple-icons:flutter" },
      { label: "JavaScript", icon: "simple-icons:javascript" },
      { label: "TypeScript", icon: "simple-icons:typescript" },
      { label: "CSS3", icon: "simple-icons:css" },
      { label: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    title: "Backend",
    copy: "Application logic, APIs, and systems that can scale without becoming obscure.",
    items: [
      { label: "Node.js", icon: "simple-icons:nodedotjs" },
      { label: "Express", icon: "simple-icons:express" },
      { label: "Laravel", icon: "simple-icons:laravel" },
      { label: "Supabase", icon: "simple-icons:supabase" },
      { label: "Firebase", icon: "simple-icons:firebase" },
    ],
  },
  {
    title: "Languages",
    copy: "A mix of web, systems, and application development tools.",
    items: [
      { label: "JavaScript", icon: "simple-icons:javascript" },
      { label: "TypeScript", icon: "simple-icons:typescript" },
      { label: "Java", icon: "fa-brands fa-java" },
      { label: "C", icon: "simple-icons:c" },
      { label: "C++", icon: "simple-icons:cplusplus" },
    ],
  },
  {
    title: "Desktop and mobile",
    copy: "Cross-platform work with a focus on practical product experiences.",
    items: [
      { label: "JavaFX", icon: "fa-brands fa-java" },
      { label: "Flutter Desktop", icon: "simple-icons:flutter" },
      { label: "Flutter", icon: "simple-icons:flutter" },
    ],
  },
  {
    title: "Data layer",
    copy: "Relational and document-driven persistence depending on the product shape.",
    items: [
      { label: "MongoDB", icon: "simple-icons:mongodb" },
      { label: "MySQL", icon: "simple-icons:mysql" },
      { label: "PostgreSQL", icon: "simple-icons:postgresql" },
      { label: "ObjectBox", icon: "fa-solid fa-box-archive" },
      { label: "Firebase", icon: "simple-icons:firebase" },
      { label: "Supabase", icon: "simple-icons:supabase" },
    ],
  },
  {
    title: "Tools and workflow",
    copy: "The supporting stack behind delivery, collaboration, and iteration.",
    items: [
      { label: "Git", icon: "simple-icons:git" },
      { label: "Figma", icon: "simple-icons:figma" },
      { label: "Jira", icon: "simple-icons:jira" },
      { label: "Ubuntu", icon: "simple-icons:ubuntu" },
      { label: "Pop!_OS", icon: "simple-icons:popos" },
    ],
  },
];

export const now = {
  copy:
    "Right now I’m exploring motion-rich interfaces, real-time product ideas, and cleaner frontends that still respect performance budgets and semantic structure.",
  priorities: [
    "Building web experiences with stronger layout systems and clearer content hierarchy.",
    "Experimenting with real-time and scanner-driven workflows.",
    "Keeping accessibility, maintainability, and performance in the loop from the first draft.",
    "Contributing to open-source work while sharpening product-level frontend systems.",
  ],
};

export const availability = [
  {
    title: "Open to",
    detail: "Freelance, remote, product collaborations, and open-source work.",
  },
  {
    title: "Best fit",
    detail: "Projects that need strong frontend thinking with full-stack execution behind it.",
  },
  {
    title: "Languages",
    detail: "English and Arabic, with a preference for direct, well-scoped collaboration.",
  },
  {
    title: "Working style",
    detail: "Clear scope, clean implementation, and steady iteration over noise.",
  },
];

export const tickerItems = [
  "React",
  "Next.js",
  "Flutter",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Laravel",
  "Supabase",
  "Java",
  "C",
  "C++",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Figma",
  "Git",
  "Ubuntu",
  "Pop!_OS",
];

export const contact = {
  copy:
    "If you have a product idea, a frontend that needs sharper structure, or a full-stack build that needs to move from concept to working software, let’s talk.",
  actions: [
    { label: "Email me", shortLabel: "EM", icon: "fa-solid fa-envelope", href: "mailto:ahriyadh19@gmail.com" },
    { label: "Message on LinkedIn", shortLabel: "LI", icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/ahriyadh19/" },
    { label: "See GitHub", shortLabel: "GH", icon: "fa-brands fa-github", href: "https://github.com/ahriyadh19" },
    { label: "Open Telegram", shortLabel: "TG", icon: "fa-brands fa-telegram", href: "https://t.me/ahriyadh19" },
  ],
};