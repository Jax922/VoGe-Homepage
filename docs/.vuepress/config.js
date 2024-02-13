import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: "/VoGe-Homepage/",
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: 'Github',
                items: [
                    { text: 'VoGe-Portal', link: 'https://github.com/Jax922/VoGe-Portal' },
                    { text: 'VoGe-Display', link: 'https://github.com/Jax922/VoGe-Display' },
                    { text: 'VoGe-NLU', link: 'https://github.com/Jax922/VoGe_NLU'}
                ]
            }
        ]
    }),
    lang: 'en-US',
    title: "VoGe Presentation Docs",
//   head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    

})
