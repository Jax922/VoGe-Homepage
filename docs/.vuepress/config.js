import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/VoGe-Homepage/",
  bundler: viteBundler(),
  theme: defaultTheme(),
})
