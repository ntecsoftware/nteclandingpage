import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Caminhos relativos permitem publicar em /repositorio/ e em domínio próprio.
  base: './',
  plugins: [react(), tailwindcss()],
})
