const fs = require("fs");
const path = require("path");

const baseDir = path.join(process.cwd(), "app");

const topics = [
  {
    name: "html",
    children: [
      "basics",
      "elements-and-attributes",
      "forms-and-inputs",
      "semantic-html",
      "accessibility",
      "seo",
      "rendering-pipeline",
    ],
  },
  {
    name: "css",
    children: [
      "selectors",
      "box-model",
      "layout-basics",
      "flexbox",
      "grid",
      "positioning",
      "responsive-design",
      "animations",
      "css-architecture",
      "performance",
      "design-systems",
    ],
  },
  {
    name: "react-js",
    children: [
      "jsx-and-components",
      "props-and-state",
      "event-handling",
      "conditional-rendering",
      "hooks",
      "context-api",
      "rendering-internals",
      "concurrent-rendering",
      "suspense-and-streaming",
      "server-components",
      "performance-optimization",
      "architecture-patterns",
      "testing",
    ],
  },
  {
    name: "next-js",
    children: [
      "routing",
      "data-fetching",
      "rendering-strategies",
      "server-vs-client-components",
      "caching",
      "middleware",
      "authentication",
      "api-design",
      "edge-vs-node-runtime",
      "performance",
      "observability",
      "deployment",
    ],
  },
  {
    name: "node-js",
    children: [
      "runtime-overview",
      "modules",
      "http-server",
      "event-loop",
      "async-patterns",
      "file-system",
      "streams",
      "concurrency",
      "memory-management",
      "networking",
      "api-design",
      "authentication",
      "error-handling",
      "observability",
      "scaling",
      "security",
      "background-jobs",
    ],
  },
  {
    name: "databases",
    children: [
      "sql-basics",
      "crud",
      "joins",
      "indexing",
      "transactions",
      "nosql",
      "data-modeling",
      "query-optimization",
      "replication",
      "sharding",
      "consistency-models",
      "caching",
      "search",
    ],
  },
  {
    name: "system-design",
    children: [
      "basics",
      "latency-vs-throughput",
      "load-balancing",
      "caching",
      "database-scaling",
      "cap-theorem",
      "consistent-hashing",
      "rate-limiting",
      "messaging-systems",
      "event-driven-architecture",
      "distributed-transactions",
      "idempotency",
      "api-design",
      "real-world-systems",
    ],
  },
  {
    name: "microservices",
    children: [
      "monolith-vs-microservices",
      "service-boundaries",
      "service-communication",
      "api-gateway",
      "service-discovery",
      "fault-tolerance",
      "distributed-transactions",
      "observability",
      "deployment-strategies",
    ],
  },
  {
    name: "docker",
    children: [
      "basics",
      "images-and-containers",
      "dockerfile",
      "volumes",
      "networking",
      "multi-stage-builds",
      "optimization",
      "security",
    ],
  },
  {
    name: "kubernetes",
    children: [
      "basics",
      "pods",
      "services",
      "deployments",
      "configmaps-and-secrets",
      "scaling",
      "autoscaling",
      "networking",
      "observability",
      "helm",
      "deployment-strategies",
    ],
  },
  {
    name: "dsa",
    children: [
      "time-and-space-complexity",
      "recursion",
      "arrays-and-strings",
      "prefix-sum",
      "sliding-window",
      "two-pointers",
      "hashing",
      "linked-list",
      "fast-and-slow-pointer",
      "stacks-and-queues",
      "monotonic-stack-and-queue",
      "trees",
      "binary-search-tree",
      "heap",
      "graphs",
      "union-find",
      "topological-sort",
      "shortest-path",
      "greedy",
      "dynamic-programming",
      "backtracking",
      "bit-manipulation",
      "trie",
      "segment-tree",
      "fenwick-tree",
      "patterns",
      "real-world-applications",
    ],
  },
  {
    name: "ai-for-web-developers",
    children: [
      "llm-fundamentals-and-model-selection",
      "prompt-engineering-and-context-design",
      "ai-assisted-dev-workflow",
      "llm-api-integration-patterns",
      "rag-and-retrieval-basics",
      "mcp-model-context-protocol",
      "langchain-fundamentals",
      "langgraph-agent-workflows",
      "tool-calling-and-function-execution",
      "memory-and-conversation-state",
      "evaluation-and-guardrails",
      "security-and-prompt-injection",
      "observability-and-cost-control",
      "production-ai-architecture",
      "real-world-enterprise-use-cases",
    ],
  },
];

const pad = (num) => String(num).padStart(2, "0");

function formatTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createMDXTemplate(title) {
  return `# ${title}`;
}

function ensureMDX(filePath, title) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, createMDXTemplate(title));
  }
}

function createStructure() {
  topics.forEach((topic) => {
    const topicPrefix = `${topic.name}`;
    const topicPath = path.join(baseDir, topicPrefix);

    ensureDir(topicPath);

    topic.children.forEach((sub, subIndex) => {
      const subPrefix = `${pad(subIndex + 1)}_${sub}`;
      const subPath = path.join(topicPath, subPrefix);

      ensureDir(subPath);

      const mdxPath = path.join(subPath, "page.mdx");
      ensureMDX(mdxPath, formatTitle(sub));
    });
  });

  console.log("✅ Staff-level topic structure created with templates");
}

createStructure();
