import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('portfolio project information', () => {
  it('contains three unique, complete project records', () => {
    expect(projects).toHaveLength(3)
    expect(new Set(projects.map((project) => project.slug)).size).toBe(3)

    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(3)
      expect(project.summary.length).toBeGreaterThan(60)
      expect(project.tags.length).toBeGreaterThanOrEqual(4)
      expect(project.proof.length).toBeGreaterThan(5)
    }
  })
})