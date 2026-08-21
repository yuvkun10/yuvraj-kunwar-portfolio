import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('portfolio project information', () => {
  it('contains three unique, complete project records', () => {
    expect(projects).toHaveLength(3)
    expect(new Set(projects.map((project) => project.slug)).size).toBe(3)

    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(3)
      expect(project.summary.length).toBeGreaterThan(60)
      expect(project.brands.length).toBeGreaterThanOrEqual(3)
      expect(new Set(project.brands).size).toBe(project.brands.length)
      expect(project.proof.length).toBeGreaterThan(5)
    }
  })
})