import { writable } from 'svelte/store'

export const theme = writable<'system' | 'light' | 'dark'>('system')

export const toggleTheme = () => {
    theme.update((theme) => {
        if (theme == 'light' || theme == 'system') {
            return 'dark'
        } else {
            return 'light'
        }
    })
}

if (typeof localStorage != 'undefined') {
    const localTheme: 'system' | 'light' | 'dark' =
        (localStorage.getItem('theme') as 'system' | 'light' | 'dark') ||
        'system'

    theme.update((theme) => localTheme)

    theme.subscribe((theme) => {
        if (typeof document != 'undefined') {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches

            const html = document.querySelector('html')

            if (theme == 'system') {
                html?.classList.toggle('dark', prefersDark)
            } else {
                html?.classList.toggle('dark', theme === 'dark')
            }

            localStorage.setItem('theme', theme)
        }
    })
}
