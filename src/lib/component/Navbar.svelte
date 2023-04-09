<script>
    import { Color } from '$lib/colors'
    import Button from '$lib/ui/Button.svelte'
    import { Icon, Moon, Sun, ComputerDesktop } from 'svelte-hero-icons'
    import { theme, toggleTheme } from '../../stores'
    import { page } from '$app/stores'
</script>

<nav class="flex sticky flex-row items-center p-4 w-full h-24 md:px-8">
    <a href="/" class="mr-auto" aria-label="Home">
        <svg
            width="48"
            height="48"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-black dark:fill-white"
        >
            <path
                id="hexagon"
                d="M45.5 10.8868C48.594 9.10042 52.406 9.10042 55.5 10.8868L82.3061 26.3632C85.4001 28.1496 87.3061 31.4508 87.3061 35.0235V65.9765C87.3061 69.5492 85.4001 72.8504 82.3061 74.6368L55.5 90.1132C52.406 91.8996 48.594 91.8996 45.5 90.1132L18.6939 74.6368C15.5999 72.8504 13.6939 69.5492 13.6939 65.9765V35.0235C13.6939 31.4508 15.5999 28.1496 18.6939 26.3632L45.5 10.8868Z"
            />
        </svg>
    </a>
    <div
        class="flex flex-row min-w-[12rem] px-4 py-1 rounded-full
        bg-white/10 dark:bg-white/10 items-center justify-center shadow-md border-t border-t-transparent dark:border-t-white/10 gap-4"
    >
        <Button link href="/about" color={Color.secondary}>About</Button>
        <Button link href="/privacy" color={Color.secondary}>
            Privacy Guide
        </Button>
    </div>
    <Button
        class="ml-auto"
        color={Color.secondary}
        onclick={() => toggleTheme()}
        label="Toggle dark theme"
    >
        <Icon
            src={$theme == 'dark'
                ? Moon
                : $theme == 'light'
                ? Sun
                : $theme == 'system'
                ? ComputerDesktop
                : Moon}
            size="20"
        />
    </Button>
</nav>
