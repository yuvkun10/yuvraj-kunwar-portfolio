export type ProjectSlug =
  | 'dulciepay'
  | 'pennypay'
  | 'prompt-injection-detector'

export type Project = {
  slug: ProjectSlug
  index: string
  name: string
  discipline: string
  proof: string
  summary: string
  tags: string[]
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
    tags: ['React 19', 'Node 22', 'Prisma', 'Supabase', 'OCR'],

  },
  {
    slug: 'pennypay',
    index: '02',
    name: 'PennyPay',
    discipline: 'TypeScript / Multi-entity finance',
    proof: 'Completed production platform',
    summary:
      'Designed and completed a typed, multi-entity operations platform for Hazel and Coastal Home Care, using local OCR and RAG, tiered approvals, Lookout submission, payment processing, and reconciliation.',
    tags: ['TypeScript', 'TanStack Start', 'Hono', 'Supabase', 'Local AI'],

  },
  {
    slug: 'prompt-injection-detector',
    index: '03',
    name: 'Prompt Injection Detector',
    discipline: 'AI security / Open source',
    proof: 'Library + API + CLI',
    summary:
      'Built an open-source TypeScript detector delivered as a library, HTTP API, and CLI, combining deterministic rules with an optional model-assisted judge and no required hosted service.',
    tags: ['TypeScript', 'HTTP API', 'CLI', 'Offline capable'],

  },
]

export const technologyGroups = [
  {
    label: 'Build',
    tools: [
      ['TypeScript', 'PennyPay and Prompt Injection Detector'],
      ['React 19', 'DulciePay and PennyPay'],
      ['TanStack Start', 'PennyPay typed SSR frontend'],
      ['Hono / Node.js', 'PennyPay and DulciePay service boundaries'],
    ],
  },
  {
    label: 'Data + intelligence',
    tools: [
      ['Supabase', 'DulciePay and PennyPay auth, Postgres, and storage'],
      ['Prisma / Drizzle', 'Typed models and migrations across production platforms'],
      ['pgvector + RAG', 'Citation-backed internal knowledge workflows'],
      ['OCR + vision models', 'DulciePay and PennyPay document extraction'],
    ],
  },
  {
    label: 'Ship + operate',
    tools: [
      ['Vercel / Render', 'Production frontend, API, and worker delivery'],
      ['Cloudflare', 'Named tunnels for PennyPay local inference services'],
      ['GitHub Actions', 'Checks, migrations, and deployment gates'],
    ],
  },
] as const
