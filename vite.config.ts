/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

const securityHeaders = {
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'content-security-policy': "frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
}

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    ...(process.env.VITEST
      ? []
      : [
          nitro({
            preset: process.env.VERCEL ? 'vercel' : 'node-server',
            routeRules: { '/**': { headers: securityHeaders } },
          }),
        ]),
    ...(process.env.VITEST ? [] : [tanstackStart()]),
    viteReact(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['**/node_modules/**', '**/.output/**'],
  },
})
