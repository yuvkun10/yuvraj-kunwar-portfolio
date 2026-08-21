import {
  siCloudflare,
  siDrizzle,
  siGithub,
  siGithubactions,
  siHono,
  siLangchain,
  siNodedotjs,
  siOllama,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRender,
  siSupabase,
  siTanstack,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from 'simple-icons'
import type { BrandKey } from '#/data/projects'

const brandIcons: Record<BrandKey, SimpleIcon> = {
  cloudflare: siCloudflare,
  drizzle: siDrizzle,
  github: siGithub,
  'github-actions': siGithubactions,
  hono: siHono,
  langchain: siLangchain,
  node: siNodedotjs,
  ollama: siOllama,
  postgres: siPostgresql,
  prisma: siPrisma,
  python: siPython,
  react: siReact,
  render: siRender,
  supabase: siSupabase,
  tanstack: siTanstack,
  typescript: siTypescript,
  vercel: siVercel,
}

export function BrandIcon({ brand, size = 24 }: { brand: BrandKey; size?: number }) {
  const icon = brandIcons[brand]

  return (
    <svg
      className="brand-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}
