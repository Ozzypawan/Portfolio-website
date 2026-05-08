/* Structural / visual data — all translatable text lives in translations.js */

export const personalInfo = {
  name:     'Pawan Raj Pandey',
  location: 'Kathmandu, Nepal',
  email:    'pawanpandey1251@gmail.com',
  phone:    '+977 9767279454',
  github:   'https://github.com/ozzypawan',
  linkedin: 'https://www.linkedin.com/in/pawanrajpandey',
}

export const skills = [
  { name: 'Python',            color: '#3776AB', category: 'Language' },
  { name: 'Django',            color: '#44B78B', category: 'Framework' },
  { name: 'FastAPI',           color: '#009688', category: 'Framework' },
  { name: 'Django REST',       color: '#e05252', category: 'Framework' },
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
]

export const skillCategoryKeys = [
  'Language',
  'Framework',
  'Database',
  'Protocol',
  'DevOps',
  'Architecture',
]

/* text fields (role, bullets) are in translations.js, indexed in the same order */
export const experience = [
  {
    id:       1,
    company:  'Zeta Labs',
    location: 'Kuleshwor, Kathmandu',
    period:   'Jun 2025 – Present',
    type:     'Full-time',
    link:     'https://withzetalabs.com/',
    tech:     ['Django', 'FastAPI', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'Docker', 'CI/CD', 'JWT', 'RBAC'],
    accent:   '#00d9ff',
  },
  {
    id:       2,
    company:  'Ayata Incorporation',
    location: 'Anamnagar, Kathmandu',
    period:   'Jul 2024 – Apr 2025',
    type:     'Full-time',
    link:     'https://ayata.com.np/',
    tech:     ['Django', 'FastAPI', 'DRF', 'RabbitMQ', 'gRPC', 'Redis', 'PostgreSQL', 'RBAC'],
    accent:   '#7c3aed',
  },
  {
    id:       3,
    company:  'Ayata Incorporation',
    location: 'Anamnagar, Kathmandu',
    period:   'Apr 2024 – Jul 2024',
    type:     'Internship',
    link:     'https://ayata.com.np/',
    tech:     ['Django', 'DRF', 'PostgreSQL', 'ClickUp'],
    accent:   '#52B788',
  },
]

export const education = {
  degree:      'BSc. Computer Science & IT',
  institution: 'St. Lawrence College',
  university:  'Tribhuvan University',
  location:    'Kathmandu, Nepal',
  period:      '2020 – 2024',
}

/* text fields (title, description, tag) are in translations.js, indexed in the same order */
export const projects = [
  {
    id:       1,
    tech:     ['Django', 'FastAPI', 'gRPC', 'RabbitMQ', 'Redis', 'PostgreSQL'],
    private:  true,
    live:     'https://ayata.com.np/',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.02))',
    accent:   '#7c3aed',
  },
  {
    id:       2,
    tech:     ['Django', 'FastAPI', 'gRPC', 'RabbitMQ', 'Docker', 'CI/CD', 'JWT'],
    private:  true,
    live:     'https://withzetalabs.com/',
    gradient: 'linear-gradient(135deg, rgba(0,217,255,0.12), rgba(0,217,255,0.02))',
    accent:   '#00d9ff',
  },
  {
    id:       3,
    tech:     ['Python', 'Django', 'FastAPI', 'RabbitMQ', 'PostgreSQL', 'RBAC'],
    private:  true,
    live:     'https://withzetalabs.com/',
    gradient: 'linear-gradient(135deg, rgba(82,183,136,0.12), rgba(82,183,136,0.02))',
    accent:   '#52B788',
  },
]

export const contactLinks = [
  { label: 'Email',    value: 'pawanpandey1251@gmail.com',       href: 'mailto:pawanpandey1251@gmail.com' },
  { label: 'GitHub',   value: 'github.com/ozzypawan',             href: 'https://github.com/ozzypawan' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pawanrajpandey',   href: 'https://www.linkedin.com/in/pawanrajpandey' },
  { label: 'Phone',    value: '+977 9767279454',                  href: 'tel:+9779767279454' },
]
