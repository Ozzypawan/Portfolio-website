export const personalInfo = {
  name:     'Pawan Raj Pandey',
  location: 'Kathmandu, Nepal',
  email:    'pawanpandey1251@gmail.com',
  phone:    '+977 9767279454',
  website:  'https://www.pawanrajpandey.com.np',
  github:   'https://github.com/ozzypawan',
  linkedin: 'https://www.linkedin.com/in/pawanrajpandey',
}

export const skills = [
  { name: 'Python',            color: '#3776AB', category: 'Language' },
  { name: 'C#',                color: '#239120', category: 'Language' },
  { name: 'Django',            color: '#44B78B', category: 'Framework' },
  { name: 'FastAPI',           color: '#009688', category: 'Framework' },
  { name: 'Django REST',       color: '#e05252', category: 'Framework' },
  { name: '.NET',              color: '#512BD4', category: 'Framework' },
  { name: 'PostgreSQL',        color: '#4169E1', category: 'Database' },
  { name: 'MySQL',             color: '#00758F', category: 'Database' },
  { name: 'MongoDB',           color: '#13AA52', category: 'Database' },
  { name: 'Qdrant',            color: '#8B5CF6', category: 'Database' },
  { name: 'Redis',             color: '#DC382D', category: 'Database' },
  { name: 'REST APIs',         color: '#00d9ff', category: 'Protocol' },
  { name: 'gRPC',              color: '#00BCD4', category: 'Protocol' },
  { name: 'WebSockets',        color: '#7c3aed', category: 'Protocol' },
  { name: 'RabbitMQ',          color: '#FF6600', category: 'Protocol' },
  { name: 'Docker',            color: '#2496ED', category: 'DevOps' },
  { name: 'CI/CD',             color: '#22c55e', category: 'DevOps' },
  { name: 'Jenkins',           color: '#D33C27', category: 'DevOps' },
  { name: 'Git',               color: '#F05032', category: 'DevOps' },
  { name: 'Microservices',     color: '#52B788', category: 'Architecture' },
  { name: 'RBAC',              color: '#a78bfa', category: 'Architecture' },
  { name: 'SaaS Architecture', color: '#00d9ff', category: 'Architecture' },
  { name: 'System Design',     color: '#f59e0b', category: 'Architecture' },
]

export const skillCategoryKeys = [
  'Language',
  'Framework',
  'Database',
  'Protocol',
  'DevOps',
  'Architecture',
]

export const experience = [
  {
    id:       4,
    company:  'Leo Club of Kathmandu Budigandaki',
    location: 'Kathmandu, Nepal',
    period:   'Jun 2026 – Present',
    type:     'Volunteer',
    link:     'https://lckbudigandaki.org.np/',
    tech:     ['React', 'Vite', 'EmailJS', 'GitHub Pages'],
    accent:   '#f59e0b',
  },
  {
    id:       1,
    company:  'I.D.E.N.T.V. Nepal — A.I Solution Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period:   'Jun 2025 – Present',
    type:     'Remote',
    link:     'https://identv.com/',
    tech:     ['Python', 'Django', 'DRF', 'FastAPI', '.NET', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Qdrant', 'gRPC', 'RabbitMQ', 'WebSockets', 'Docker', 'Jenkins', 'RBAC'],
    accent:   '#00d9ff',
  },
  {
    id:       2,
    company:  'Ayata Incorporation Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period:   'Feb 2022 – Jun 2025',
    type:     'Full-time',
    link:     'https://ayata.com.np/',
    tech:     ['Python', 'Django', 'DRF', 'PostgreSQL', 'MySQL', 'REST APIs'],
    accent:   '#7c3aed',
  },
  {
    id:       3,
    company:  'Ayata Incorporation Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period:   'Jan 2022 – Feb 2022',
    type:     'Internship',
    link:     'https://ayata.com.np/',
    tech:     ['Python', 'Django', 'REST APIs'],
    accent:   '#52B788',
  },
]

export const education = {
  degree:      'B.Sc. CSIT',
  institution: 'St. Lawrence College',
  university:  'Tribhuvan University',
  location:    'Kathmandu, Nepal',
  period:      '',
}

export const projects = [
  {
    id:       1,
    tech:     ['Django', 'FastAPI', 'gRPC', 'RabbitMQ', 'Redis', 'PostgreSQL'],
    private:  true,
    live:     'https://ihrtrack.com/',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.02))',
    accent:   '#7c3aed',
  },
  {
    id:       2,
    tech:     ['Django', 'FastAPI', 'gRPC', 'RabbitMQ', 'Docker', 'CI/CD', 'JWT'],
    private:  true,
    live:     'https://identv.com/',
    gradient: 'linear-gradient(135deg, rgba(0,217,255,0.12), rgba(0,217,255,0.02))',
    accent:   '#00d9ff',
  },
  {
    id:       3,
    tech:     ['Python', 'Django', 'FastAPI', 'RabbitMQ', 'PostgreSQL', 'RBAC'],
    private:  true,
    live:     'https://identv.com/',
    gradient: 'linear-gradient(135deg, rgba(82,183,136,0.12), rgba(82,183,136,0.02))',
    accent:   '#52B788',
  },
  {
    id:       4,
    tech:     ['React', 'React Router', 'Vite', 'EmailJS'],
    private:  true,
    live:     'https://lckbudigandaki.org.np/',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.02))',
    accent:   '#f59e0b',
  },
]

export const contactLinks = [
  { label: 'Email',    value: 'pawanpandey1251@gmail.com',       href: 'mailto:pawanpandey1251@gmail.com' },
  { label: 'GitHub',   value: 'github.com/ozzypawan',             href: 'https://github.com/ozzypawan' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pawanrajpandey',   href: 'https://www.linkedin.com/in/pawanrajpandey' },
  { label: 'Phone',    value: '+977 9767279454',                  href: 'tel:+9779767279454' },
]
