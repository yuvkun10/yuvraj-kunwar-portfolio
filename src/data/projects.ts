export type ProjectSlug =
  | 'dulciepay'
  | 'pennypay'
  | 'prompt-injection-detector'

export type BrandKey =
  | 'cloudflare'
  | 'drizzle'
  | 'github'
  | 'github-actions'
  | 'hono'
  | 'langchain'
  | 'node'
  | 'ollama'
  | 'postgres'
  | 'prisma'
  | 'python'
  | 'react'
  | 'render'
  | 'supabase'
  | 'tanstack'
  | 'typescript'
  | 'vercel'

export type Project = {
  slug: ProjectSlug
  index: string
  name: string
  discipline: string
  proof: string
  summary: string
  brands: BrandKey[]
}

export const projects: Project[] = [
  {
    slug: 'dulciepay',
    index: '01',
    name: 'DulciePay',
    discipline: 'AI engineering / Finance operations',
    proof: 'Live production platform',
    summary:
      'Owned and completed an aged-care finance platform that replaced a disconnected approval workflow with controlled invoice intake, OCR review, community-scoped approvals, Lookout submission, ABA payments, and audit history.',
    brands: ['react', 'node', 'prisma', 'supabase'],

  },
  {
    slug: 'pennypay',
    index: '02',
    name: 'PennyPay',
    discipline: 'TypeScript / Multi-entity finance',
    proof: 'Completed production platform',
    summary:
      'Designed and completed a typed, multi-entity operations platform for Hazel and Coastal Home Care, using local OCR and RAG, tiered approvals, Lookout submission, payment processing, and reconciliation.',
    brands: ['typescript', 'tanstack', 'hono', 'supabase'],

  },
  {
    slug: 'prompt-injection-detector',
    index: '03',
    name: 'Prompt Injection Detector',
    discipline: 'AI security / Open source',
    proof: 'Library + API + CLI',
    summary:
      'Built an open-source TypeScript detector delivered as a library, HTTP API, and CLI, combining deterministic rules with an optional model-assisted judge and no required hosted service.',
    brands: ['typescript', 'node', 'github'],

  },
]

export const technologyGroups = [
  {
    label: 'Build',
    tools: [
      ['typescript', 'PennyPay and Prompt Injection Detector'],
      ['react', 'DulciePay and PennyPay interfaces'],
      ['tanstack', 'PennyPay typed SSR frontend'],
      ['hono', 'PennyPay API boundary'],
      ['node', 'DulciePay services and workers'],
    ],
  },
  {
    label: 'Data + intelligence',
    tools: [
      ['supabase', 'Auth, Postgres, and storage across both platforms'],
      ['postgres', 'Operational data and vector retrieval'],
      ['prisma', 'DulciePay models and migrations'],
      ['drizzle', 'PennyPay typed data access'],
      ['langchain', 'Citation-backed knowledge workflows'],
      ['ollama', 'Local inference and document processing'],
    ],
  },
  {
    label: 'Ship + operate',
    tools: [
      ['vercel', 'Production frontend delivery'],
      ['render', 'API and worker infrastructure'],
      ['cloudflare', 'Named tunnels for local inference services'],
      ['github-actions', 'Checks, migrations, and deployment gates'],
    ],
  },
] as const
