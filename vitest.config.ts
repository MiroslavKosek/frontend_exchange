import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'cobertura'],
      reportsDirectory: './coverage',
      thresholds: {
        branches: 80
      },
    },
    deps: {
      optimizer: {
        web: {
          include: ['@angular/**', 'rxjs/**'],
        },
      },
    },
  },});