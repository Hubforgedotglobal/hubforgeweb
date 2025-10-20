// HubForge Resource Hub - M&E Research & Tech Tools
// Add new resources by adding objects to this array

const RESOURCES = [
  // Data Collection Tools
  {
    id: "kobo",
    name: "KoboToolbox",
    category: "Data Collection",
    url: "https://www.kobotoolbox.org",
    description: "Open-source mobile data collection platform designed for NGOs and humanitarian organizations.",
    logo: "https://www.kobotoolbox.org/assets/images/logo.png"
  },
  {
    id: "odk",
    name: "Open Data Kit (ODK)",
    category: "Data Collection",
    url: "https://getodk.org",
    description: "Build and deploy offline-capable data collection forms for research and fieldwork."
  },
  {
    id: "surveycto",
    name: "SurveyCTO",
    category: "Data Collection",
    url: "https://www.surveycto.com",
    description: "Secure, research-grade data collection platform with advanced features for complex surveys."
  },

  // Analytics & Dashboards (merged with Visualization)
  {
    id: "looker",
    name: "Looker Studio",
    category: "Analytics & Dashboards",
    url: "https://lookerstudio.google.com",
    description: "Free interactive dashboards and data visualization from Google (formerly Data Studio)."
  },
  {
    id: "metabase",
    name: "Metabase",
    category: "Analytics & Dashboards",
    url: "https://www.metabase.com",
    description: "Open-source business intelligence tool that makes it easy for teams to ask questions and learn from data."
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "Analytics & Dashboards",
    url: "https://www.airtable.com",
    description: "Spreadsheet-database hybrid for organizing project data, tracking, and collaboration."
  },
  {
    id: "flourish",
    name: "Flourish",
    category: "Analytics & Dashboards",
    url: "https://flourish.studio",
    description: "Create beautiful, interactive charts, maps, and data stories without coding."
  },
  {
    id: "datawrapper",
    name: "Datawrapper",
    category: "Analytics & Dashboards",
    url: "https://www.datawrapper.de",
    description: "Simple, fast tool for creating charts, maps, and tables for reports and presentations."
  },

  // Evaluation Platforms
  {
    id: "toladata",
    name: "TolaData",
    category: "Evaluation Platforms",
    url: "https://www.toladata.com",
    description: "M&E platform designed for international development organizations to track programs and results."
  },
  {
    id: "dhis2",
    name: "DHIS2",
    category: "Evaluation Platforms",
    url: "https://dhis2.org",
    description: "World's largest open-source health information system and monitoring platform."
  },

  // Qualitative Analysis Tools
  {
    id: "taguette",
    name: "Taguette",
    category: "Qualitative Tools",
    url: "https://taguette.org",
    description: "Free, open-source qualitative research tool for coding and analyzing text documents."
  },
  {
    id: "nvivo",
    name: "NVivo",
    category: "Qualitative Tools",
    url: "https://www.qsrinternational.com/nvivo",
    description: "Professional software for in-depth qualitative and mixed methods research analysis."
  },

  // AI & Automation
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI & Automation",
    url: "https://chat.openai.com",
    description: "AI assistant for drafting reports, summarizing data, and automating writing tasks."
  },
  {
    id: "claude",
    name: "Claude",
    category: "AI & Automation",
    url: "https://claude.ai",
    description: "Anthropic's AI assistant for analysis, research, and creative work with extended context."
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "AI & Automation",
    url: "https://gemini.google.com",
    description: "Google's multimodal AI for research, analysis, and creative problem-solving."
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "AI & Automation",
    url: "https://www.perplexity.ai",
    description: "AI-powered search engine that provides cited answers and research assistance."
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "AI & Automation",
    url: "https://notebooklm.google.com",
    description: "Google's AI research assistant that helps you understand and synthesize documents."
  },
  {
    id: "colab",
    name: "Google Colab",
    category: "AI & Automation",
    url: "https://colab.research.google.com",
    description: "Cloud-based Jupyter notebooks for data science, AI prototyping, and collaborative coding."
  },
  {
    id: "huggingface",
    name: "Hugging Face Spaces",
    category: "AI & Automation",
    url: "https://huggingface.co/spaces",
    description: "Host and share open-source AI applications and machine learning demos."
  },

  // Open Data Sources
  {
    id: "worldbank",
    name: "World Bank Data",
    category: "Open Data",
    url: "https://data.worldbank.org",
    description: "Comprehensive global development indicators and datasets from the World Bank."
  },
  {
    id: "ourworld",
    name: "Our World in Data",
    category: "Open Data",
    url: "https://ourworldindata.org",
    description: "Research-based data visualizations on global issues like health, poverty, and education."
  },
  {
    id: "hdx",
    name: "Humanitarian Data Exchange",
    category: "Open Data",
    url: "https://data.humdata.org",
    description: "UN OCHA's open platform for sharing humanitarian data across crises and countries."
  },

  // Learning & Knowledge Hubs
  {
    id: "betterevaluation",
    name: "BetterEvaluation",
    category: "Learning Hubs",
    url: "https://www.betterevaluation.org",
    description: "Comprehensive library of evaluation methods, frameworks, and best practices."
  },
  {
    id: "merltech",
    name: "MERL Tech Initiative",
    category: "Learning Hubs",
    url: "https://merltech.org",
    description: "Global community hub for digital innovation in monitoring, evaluation, research, and learning."
  },
  {
    id: "merlcenter",
    name: "MERL Center",
    category: "Learning Hubs",
    url: "https://merlcenter.org",
    description: "Open community and resource center for MERL practitioners worldwide."
  },
  {
    id: "tools4dev",
    name: "Tools4Dev",
    category: "Learning Hubs",
    url: "https://tools4dev.org",
    description: "Practical M&E guides, templates, and how-to resources for development practitioners."
  },
  {
    id: "responsibledata",
    name: "Responsible Data Forum",
    category: "Learning Hubs",
    url: "https://responsibledata.io",
    description: "Ethical guidance and frameworks for responsible data use in social impact work."
  }
];

// Extract unique categories for filtering
const CATEGORIES = [...new Set(RESOURCES.map(r => r.category))].sort();
