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
                children: [
                    { text: 'VoGe-Portal', link: 'https://github.com/Jax922/VoGe-Portal' },
                    { text: 'VoGe-Display', link: 'https://github.com/Jax922/VoGe-Display' },
                    { text: 'VoGe-NLU', link: 'https://github.com/Jax922/VoGe_NLU'}
                ]
            }
        ],
        sidebar: [
            {
                text: "VoGe-Portal",
            },
            {
                text: "VoGe-Display",
                children: [
                    {
                        text: "Introduction",
                        link: '/VoGe-Display/README.md'
                    },
                    {
                        text: "Voice Interaction",
                        link: '/VoGe-Display/Voice Interaction.md'
                    },
                    {
                        text: "Gesture Interaction",
                        link: '/VoGe-Display/Gesture Interaction.md'
                    }
                ]
            },
            {
                text: "VoGe-NLU",
            }
        ],
    }),
    lang: 'en-US',
    title: "VoGe Presentation Docs",
//   head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    

})
