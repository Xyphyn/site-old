<script>
    import { Color } from '$lib/colors'
    import Button from '$lib/ui/Button.svelte'
    import {
        Icon,
        Moon,
        Sun,
        ComputerDesktop,
        ChevronDown,
        XMark,
    } from 'svelte-hero-icons'
    import { theme, toggleTheme } from '../../stores'
    import { fade, scale } from 'svelte/transition'

    export let expanded = false
</script>

<nav class="flex z-10 flex-row gap-2 items-center p-4 w-full h-24">
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
    <div class="flex flex-row justify-center items-center">
        <Button
            class="ml-auto sm:hidden"
            color={Color.accent}
            onclick={() => (expanded = true)}
        >
            Menu <Icon src={ChevronDown} size="16" mini />
        </Button>
        <div
            class="hidden sm:flex flex-row sm:min-w-[12rem] px-4 py-1 rounded-full
        bg-white dark:bg-white/5 items-center justify-center shadow-md border-t border-t-transparent dark:border-t-white/10 gap-2"
        >
            <Button link href="/about">About</Button>
            <Button link href="/projects">Projects</Button>
            <Button link href="/privacy">Guide</Button>
            <Button link href="/setup">Setup</Button>
        </div>
        {#if expanded}
            <div class="fixed top-0 inset-4 max-w-full sm:hidden">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/30"
                    transition:fade={{ duration: 200 }}
                    on:click={() => (expanded = false)}
                />
                <div
                    class="flex fixed inset-x-4 top-4 flex-col gap-2 items-start p-4 max-w-full bg-white rounded-lg shadow-lg origin-top h-max dark:bg-zinc-800"
                    transition:scale={{ duration: 200, start: 0.9 }}
                >
                    <span class="p-1 mx-2 mt-2 text-lg font-bold">
                        Navigation
                    </span>
                    <Button
                        onclick={() => (expanded = false)}
                        class="absolute top-0 right-0 px-2 py-2 m-4 mt-6"
                    >
                        <Icon src={XMark} size="20" />
                    </Button>
                    <Button
                        link
                        href="/about"
                        class="w-full"
                        onclick={() => (expanded = false)}
                    >
                        About
                    </Button>
                    <Button
                        link
                        href="/projects"
                        class="w-full"
                        onclick={() => (expanded = false)}
                    >
                        Projects
                    </Button>
                    <Button
                        link
                        href="/privacy"
                        class="w-full"
                        onclick={() => (expanded = false)}
                    >
                        Privacy Guide
                    </Button>
                    <Button
                        link
                        href="/setup"
                        class="w-full"
                        onclick={() => (expanded = false)}
                    >
                        Setup
                    </Button>
                </div>
            </div>
        {/if}
    </div>
    <Button
        class="sm:ml-auto"
        color={Color.accent}
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
