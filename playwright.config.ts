import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 4 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:50789'
  },
  webServer: {
    command: 'vite --port 50789 --mode test',
    url: 'http://localhost:50789',
    reuseExistingServer: !process.env.CI
  }
})
