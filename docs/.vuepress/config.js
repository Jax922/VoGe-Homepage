import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: "/VoGe-Homepage/",
    bundler: viteBundler(),
    theme: defaultTheme(),
    lang: 'en-US',
    title: "VoGe Presentation",
//   head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    nav: [
        { text: 'Home', link: '/' },
        { text: 'VoGe-Portal', link: 'https://github.com/Jax922/VoGe-Portal' },
        { text: 'VoGe-Display', link: 'https://github.com/Jax922/VoGe-Display' },
        { text: 'VoGe-NLU', link: 'https://github.com/Jax922/VoGe_NLU'}
    ]
})
