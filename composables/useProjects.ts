export type ProjectContent =
  | {
      type: "text"
      label: string
      text: string
    }
  | {
      type: "image"
      src: string
      alt?: string
      caption?: string
    }

export interface Project {
  slug: string
  name: string
  period: string
  venue?: string
  badge?: string
  summary: string
  tags: string[]
  content: ProjectContent[]
  links?: {
    label: string
    href: string
  }[]
}

export function useProjects() {
  const projects: Project[] = [
    {
      slug: "ml-anomaly-pipeline",

      name: "Anomaly Detection & Severity Classification — ML Pipeline",

      period: "Mar – Aug 2024",

      venue: "SAP SE",

      badge: "ML Engineer",

      summary:
        "A machine learning pipeline replacing manual, rule-based anomaly classification for cloud telemetry data.",

      tags: ["Python", "scikit-learn", "XGBoost", "PySpark", "RandomForest"],

      content: [
        {
          type: "text",
          label: "Background",
          text:
            "SAP's cloud operations monitor real-time telemetry across customer systems. Previously, detection relied on brittle, maintenance-heavy rule-based thresholds blind to multi-metric interactions."
        },


        {
          type: "text",
          label: "Approach",
          text:
            "I framed this as a multi-class severity classification task, predicting priority levels and continuous severity scores. The project involved a significant ETL effort to flatten deeply nested JSON and XML telemetry records into a structured feature matrix."
        },

        {
          type: "text",
          label: "Impact",
          text:
            "By evaluating architectures from Random Forest to Transformers, we found that simpler models often matched complex ones, favoring interpretability and deployment efficiency. The final pipeline demonstrated a clear path toward automating anomaly triage."
        }
      ],

      links: []
    },

    {
      slug: "createdata4ai",

      name: "CreateData4AI: Class-Specific Keyword Extraction",

      period: "Feb – Sep 2023",

      venue: "TUM / Fusionbase GmbH",

      badge: "KONVENS 2024",

      summary:
        "Foundational research into automated, class-specific keyword generation for the German Business Registry.",

      tags: ["Python", "KeyBERT", "SentenceTransformers", "NLP"],

      content: [
        {
          type: "text",
          label: "Context",
          text:
            "This project addressed the challenge of classifying 2.37 million business records into economic sectors. My thesis contributed a pipeline for extracting and generating keywords representative of specific predefined classes."
        },

        {
          type: "text",
          label: "Methodology",
          text:
            "I modified the KeyBERT library to support a guided, iterative process using 100% seed-embedding guidance. This was paired with a generation stage using lexical substitution and synonym generation via OdeNet."
        },

        {
          type: "image",
          src: "/images/projects/cd4ai_pipeline.jpg",
          caption: "Keyword generation workflow"
        },

        {
          type: "text",
          label: "Outcome",
          text:
            "The methodology achieved a 7x precision improvement over standard baselines. These results were published at KONVENS 2024, providing a scalable alternative to costly manual annotation."
        }
      ],

      links: [
        {
          label: "Read Paper",
          href: "https://aclanthology.org/2024.konvens-main.18/"
        }
      ]
    },

    {
      slug: "servicehub",

      name: "ServiceHub — Service Booking Platform",

      period: "Apr – Jul 2024",

      venue: "TUM SEBA Master's Course",

      badge: "Grade 1.3",

      summary:
        "A full-stack C2C marketplace connecting service providers and consumers with a complex scheduling engine.",

      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],

      content: [
        {
          type: "text",
          label: "Development",
          text:
            "As part of a four-person team, I developed a production-ready platform compliant with the EU Digital Services Act. My primary focus was the complex scheduling and booking logic."
        },

        {
          type: "text",
          label: "Technical Challenge",
          text:
            "I implemented a travel-time-aware system that automatically calculates transit buffers and prevents slot fragmentation. The system also handles recurring availability windows and race conditions during simultaneous booking attempts."
        },

        {
          type: "text",
          label: "Result",
          text:
            "The final deliverable covered the full service lifecycle—from listing and discovery to post-service reviews—resulting in a final grade of 1.3."
        }
      ],

      links: []
    },

    {
      slug: "ams",

      name: "Attendance Management System (AMS)",

      period: "Aug 2024 – Present",

      venue: "Amana Trust",

      badge: "Web Developer",

      summary:
        "Maintenance and feature development for a live PHP-based production system serving 50+ active users.",

      tags: ["PHP (MVC)", "Twig", "MySQL"],

      content: [
        {
          type: "text",
          label: "Environment",
          text:
            "I maintain and extend a legacy PHP MVC application used for operational needs in London. Because the system is live, all updates follow a strict local-to-QA-to-production pipeline."
        },

        {
          type: "text",
          label: "Key Contributions",
          text:
            "Contributions include designing authentication flows, implementing calendar integrations, and replacing legacy components with more maintainable Twig-based structures."
        },

  

        {
          type: "text",
          label: "Impact",
          text:
            "This ongoing work has reduced manual administrative overhead and ensures system stability for 50+ active daily users."
        }
      ],

      links: []
    }
  ]

  function getProject(slug: string) {
    return projects.find((p) => p.slug === slug) ?? null
  }

  return {
    projects,
    getProject
  }
}
