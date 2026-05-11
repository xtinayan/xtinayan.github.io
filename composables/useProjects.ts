export interface Project {
  slug: string
  name: string
  period: string
  venue?: string
  badge?: string
  summary: string
  description: string[]
  tags: string[]
  images: string[]
  links?: { label: string; href: string }[]
}

export function useProjects() {
  const projects: Project[] = [
    {
      slug: 'attendance-management',
      name: 'Attendance Management System',
      period: 'Aug 2024 — present',
      summary: 'Internal system for 50+ users, authentication, calendar integration, scheduling.',
      description: [
        'Built an internal attendance management platform used by 50+ members of the Amana Trust community in London.',
        'Architected using a PHP MVC pattern with Twig templating, enabling clean separation of concerns and fast iteration.',
        'Features include user authentication, role-based access, calendar integration, and automated scheduling workflows.',
      ],
      tags: ['PHP', 'MVC', 'Twig', 'MySQL'],
      images: [],
    },
    {
      slug: 'servicehub',
      name: 'ServiceHub',
      period: 'Apr — Jul 2024',
      summary: 'Full-stack platform connecting service providers and consumers.',
      description: [
        'Full-stack marketplace platform connecting service providers with consumers, built as part of a dual Master\'s program at TUM.',
        'Implemented end-to-end: calendar-based booking, CRUD operations, JWT authentication, and a REST API backend.',
        'Containerised with Docker for reproducible local development and deployment.',
      ],
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
      images: [],
    },
    {
      slug: 'createdata4ai',
      name: 'CreateData4AI',
      period: 'Feb — Sep 2023',
      venue: 'KONVENS 2024',
      badge: 'Publication',
      summary: 'Co-authored NLP research paper published at KONVENS 2024.',
      description: [
        'Co-authored a research paper published at KONVENS 2024, one of the leading conferences for NLP in German-speaking countries.',
        'Developed a keyword extraction pipeline using transformer-based models, achieving a +28% improvement over the baseline.',
        'Contributed to dataset creation methodology and evaluation framework design.',
      ],
      tags: ['Python', 'NLP', 'Transformers', 'HuggingFace'],
      images: [],
    },
  ]

  function getProject(slug: string) {
    return projects.find(p => p.slug === slug) ?? null
  }

  return { projects, getProject }
}
