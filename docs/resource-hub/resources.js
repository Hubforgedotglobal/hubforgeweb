// HubForge Resource Hub - M&E Research & Tech Tools
// Add new resources by adding objects to this array
// cost: "free" | "freemium" | "paid"
// grassroots: true (shows "Recommended for Grassroots" badge)

const RESOURCES = [
  // Data Collection Tools
  {
    id: "kobo",
    name: "KoboToolbox",
    category: "Data Collection",
    url: "https://www.kobotoolbox.org",
    description: "Open-source mobile data collection platform designed for NGOs and humanitarian organizations.",
    logo: "https://www.kobotoolbox.org/assets/images/logo.png",
    cost: "free",
    grassroots: true
  },
  {
    id: "odk",
    name: "Open Data Kit (ODK)",
    category: "Data Collection",
    url: "https://getodk.org",
    description: "Build and deploy offline-capable data collection forms for research and fieldwork.",
    cost: "free",
    grassroots: true
  },
  {
    id: "surveycto",
    name: "SurveyCTO",
    category: "Data Collection",
    url: "https://www.surveycto.com",
    description: "Secure, research-grade data collection platform with advanced features for complex surveys.",
    cost: "paid"
  },
  {
    id: "msforms",
    name: "Microsoft Forms",
    category: "Data Collection",
    url: "https://www.microsoft.com/en/microsoft-365/online-surveys-polls-quizzes",
    description: "Free, easy-to-use survey and form builder with real-time response tracking and analysis.",
    cost: "free",
    grassroots: true
  },
  {
    id: "commcare",
    name: "CommCare",
    category: "Data Collection",
    url: "https://www.dimagi.com/commcare/",
    description: "Mobile platform for community health workers and field teams to collect data and manage cases offline.",
    cost: "freemium",
    grassroots: true
  },

  // Analytics & Dashboards (merged with Visualization)
  {
    id: "looker",
    name: "Looker Studio",
    category: "Analytics & Dashboards",
    url: "https://lookerstudio.google.com",
    description: "Free interactive dashboards and data visualization from Google (formerly Data Studio).",
    cost: "free",
    grassroots: true
  },
  {
    id: "metabase",
    name: "Metabase",
    category: "Analytics & Dashboards",
    url: "https://www.metabase.com",
    description: "Open-source business intelligence tool that makes it easy for teams to ask questions and learn from data.",
    cost: "freemium",
    grassroots: true
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "Analytics & Dashboards",
    url: "https://www.airtable.com",
    description: "Spreadsheet-database hybrid for organizing project data, tracking, and collaboration.",
    cost: "freemium"
  },
  {
    id: "flourish",
    name: "Flourish",
    category: "Analytics & Dashboards",
    url: "https://flourish.studio",
    description: "Create beautiful, interactive charts, maps, and data stories without coding.",
    cost: "freemium"
  },
  {
    id: "datawrapper",
    name: "Datawrapper",
    category: "Analytics & Dashboards",
    url: "https://www.datawrapper.de",
    description: "Simple, fast tool for creating charts, maps, and tables for reports and presentations.",
    cost: "freemium"
  },
  {
    id: "orange",
    name: "Orange Data Mining",
    category: "Analytics & Dashboards",
    url: "https://orangedatamining.com",
    description: "Free visual programming tool for data analysis, machine learning, and visualization—no coding needed.",
    cost: "free",
    grassroots: true
  },

  // Evaluation Platforms
  {
    id: "toladata",
    name: "TolaData",
    category: "Evaluation Platforms",
    url: "https://www.toladata.com",
    description: "M&E platform designed for international development organizations to track programs and results.",
    cost: "freemium"
  },
  {
    id: "dhis2",
    name: "DHIS2",
    category: "Evaluation Platforms",
    url: "https://dhis2.org",
    description: "World's largest open-source health information system and monitoring platform.",
    cost: "free",
    grassroots: true
  },
  {
    id: "devresults",
    name: "DevResults",
    category: "Evaluation Platforms",
    url: "https://www.devresults.com",
    description: "Cloud-based M&E software for managing indicators, reporting, and data visualization in development programs.",
    cost: "paid"
  },
  {
    id: "activityinfo",
    name: "ActivityInfo",
    category: "Evaluation Platforms",
    url: "https://www.activityinfo.org",
    description: "Humanitarian project monitoring platform for tracking activities, indicators, and beneficiaries in real-time.",
    cost: "freemium"
  },

  // Qualitative Analysis Tools
  {
    id: "taguette",
    name: "Taguette",
    category: "Qualitative Tools",
    url: "https://taguette.org",
    description: "Free, open-source qualitative research tool for coding and analyzing text documents.",
    cost: "free",
    grassroots: true
  },
  {
    id: "nvivo",
    name: "NVivo",
    category: "Qualitative Tools",
    url: "https://www.qsrinternational.com/nvivo",
    description: "Professional software for in-depth qualitative and mixed methods research analysis.",
    cost: "paid"
  },
  {
    id: "jasp",
    name: "JASP",
    category: "Qualitative Tools",
    url: "https://jasp-stats.org",
    description: "Free, user-friendly alternative to SPSS for statistical analysis with both frequentist and Bayesian methods.",
    cost: "free",
    grassroots: true
  },

  // AI & Automation
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI & Automation",
    url: "https://chat.openai.com",
    description: "AI assistant for drafting reports, summarizing data, and automating writing tasks.",
    cost: "freemium"
  },
  {
    id: "claude",
    name: "Claude",
    category: "AI & Automation",
    url: "https://claude.ai",
    description: "Anthropic's AI assistant for analysis, research, and creative work with extended context.",
    cost: "freemium"
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "AI & Automation",
    url: "https://gemini.google.com",
    description: "Google's multimodal AI for research, analysis, and creative problem-solving.",
    cost: "freemium"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "AI & Automation",
    url: "https://www.perplexity.ai",
    description: "AI-powered search engine that provides cited answers and research assistance.",
    cost: "freemium"
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "AI & Automation",
    url: "https://notebooklm.google.com",
    description: "Google's AI research assistant that helps you understand and synthesize documents.",
    cost: "free",
    grassroots: true
  },
  {
    id: "colab",
    name: "Google Colab",
    category: "AI & Automation",
    url: "https://colab.research.google.com",
    description: "Cloud-based Jupyter notebooks for data science, AI prototyping, and collaborative coding.",
    cost: "freemium",
    grassroots: true
  },
  {
    id: "huggingface",
    name: "Hugging Face Spaces",
    category: "AI & Automation",
    url: "https://huggingface.co/spaces",
    description: "Host and share open-source AI applications and machine learning demos.",
    cost: "freemium"
  },

  // Collaboration & Planning
  {
    id: "miro",
    name: "Miro",
    category: "Collaboration & Planning",
    url: "https://miro.com",
    description: "Visual collaboration platform for creating theory of change, logic models, and participatory planning workshops.",
    cost: "freemium"
  },
  {
    id: "notion",
    name: "Notion",
    category: "Collaboration & Planning",
    url: "https://www.notion.so",
    description: "All-in-one workspace for M&E documentation, project tracking, and team collaboration.",
    cost: "freemium"
  },

  // M&E Frameworks
  {
    id: "toctools",
    name: "Theory of Change Online",
    category: "M&E Frameworks",
    url: "https://www.theoryofchange.org/what-is-theory-of-change/toc-background/toc-software/",
    description: "Free online tool for developing and visualizing theory of change diagrams for programs and interventions.",
    cost: "free",
    grassroots: true
  },
  {
    id: "logframelab",
    name: "Logframe Lab",
    category: "M&E Frameworks",
    url: "https://www.logframelab.com",
    description: "Digital tool for creating logical framework matrices and results chains for project planning.",
    cost: "freemium"
  },

  // Open Data Sources
  {
    id: "worldbank",
    name: "World Bank Data",
    category: "Open Data",
    url: "https://data.worldbank.org",
    description: "Comprehensive global development indicators and datasets from the World Bank.",
    cost: "free",
    grassroots: true
  },
  {
    id: "ourworld",
    name: "Our World in Data",
    category: "Open Data",
    url: "https://ourworldindata.org",
    description: "Research-based data visualizations on global issues like health, poverty, and education.",
    cost: "free",
    grassroots: true
  },
  {
    id: "hdx",
    name: "Humanitarian Data Exchange",
    category: "Open Data",
    url: "https://data.humdata.org",
    description: "UN OCHA's open platform for sharing humanitarian data across crises and countries.",
    cost: "free",
    grassroots: true
  },
  {
    id: "undata",
    name: "UN Data",
    category: "Open Data",
    url: "https://data.un.org",
    description: "United Nations statistics portal with datasets on demographics, economics, environment, and social indicators.",
    cost: "free",
    grassroots: true
  },
  {
    id: "usaiddec",
    name: "USAID Development Experience Clearinghouse",
    category: "Open Data",
    url: "https://dec.usaid.gov",
    description: "Searchable database of USAID-funded technical and program documentation from development projects worldwide.",
    cost: "free",
    grassroots: true
  },

  // Learning & Knowledge Hubs
  {
    id: "betterevaluation",
    name: "BetterEvaluation",
    category: "Learning Hubs",
    url: "https://www.betterevaluation.org",
    description: "Comprehensive library of evaluation methods, frameworks, and best practices.",
    cost: "free",
    grassroots: true
  },
  {
    id: "merltech",
    name: "MERL Tech Initiative",
    category: "Learning Hubs",
    url: "https://merltech.org",
    description: "Global community hub for digital innovation in monitoring, evaluation, research, and learning.",
    cost: "free",
    grassroots: true
  },
  {
    id: "merlcenter",
    name: "MERL Center",
    category: "Learning Hubs",
    url: "https://merlcenter.org",
    description: "Open community and resource center for MERL practitioners worldwide.",
    cost: "free",
    grassroots: true
  },
  {
    id: "tools4dev",
    name: "Tools4Dev",
    category: "Learning Hubs",
    url: "https://tools4dev.org",
    description: "Practical M&E guides, templates, and how-to resources for development practitioners.",
    cost: "free",
    grassroots: true
  },
  {
    id: "responsibledata",
    name: "Responsible Data Forum",
    category: "Learning Hubs",
    url: "https://responsibledata.io",
    description: "Ethical guidance and frameworks for responsible data use in social impact work.",
    cost: "free",
    grassroots: true
  },
  {
    id: "zotero",
    name: "Zotero",
    category: "Learning Hubs",
    url: "https://www.zotero.org",
    description: "Free, open-source reference manager for collecting, organizing, and citing research sources.",
    cost: "free",
    grassroots: true
  }
];

// Extract unique categories for filtering
const CATEGORIES = [...new Set(RESOURCES.map(r => r.category))].sort();

// Get resource count per category
function getCategoryCount(category) {
  return RESOURCES.filter(r => r.category === category).length;
}
