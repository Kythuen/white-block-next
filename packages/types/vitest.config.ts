import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    server: {
      deps: {
        inline: ['@babel/types']
      }
    },
    coverage: {
      provider: 'v8'
    }
  }
})
