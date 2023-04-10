<script lang="ts">
    import { Color } from '$lib/colors'
    import Button from '$lib/ui/Button.svelte'
    import {
        ArrowLeft,
        ArrowRight,
        Bars3,
        Icon,
        XMark,
    } from 'svelte-hero-icons'

    export let title = ''
    export let back: string | undefined = undefined
    export let next: string | undefined = undefined

    let open = false

    let scroll = 0
</script>

<svelte:window bind:scrollY={scroll} />

<title>{title}</title>
<div class="flex relative flex-row justify-center p-4 w-full">
    <nav
        class="{open
            ? 'flex'
            : 'hidden'} p-4 pt-16 md:pt-0 fixed sm:relative left-0 top-0 sm:top-8 flex-col gap-2 w-64 sm:flex sm:bg-transparent
             sm:dark:bg-transparent bg-white dark:bg-zinc-900 h-screen sm:h-max z-30 shadow-2xl sm:shadow-none table-of-contents"
        style={`--scroll: ${scroll}px;`}
    >
        <span class="flex flex-row justify-between items-center ml-2 font-bold">
            Table of Contents <Button
                onclick={() => (open = false)}
                class="w-max sm:hidden"
            >
                <Icon src={XMark} size="20" />
            </Button>
        </span>
        <Button link href="/privacy">Main Page</Button>
        <Button link href="/privacy/basics">The Basics</Button>
    </nav>
    <div class="flex flex-col gap-4 w-full max-w-2xl text-left sm:m-8">
        <Button
            onclick={() => (open = true)}
            class="relative -left-3 py-3 w-max sm:hidden"
        >
            <Icon src={Bars3} size="20" />
        </Button>
        <slot />
        <div class="flex justify-between items-center w-full">
            <Button disabled={!back} link href={back || ''} class="mr-auto">
                <Icon size="16" mini src={ArrowLeft} />
                Back
            </Button>
            <Button
                disabled={!next}
                link
                href={next || ''}
                color={Color.accent}
                class="ml-auto"
            >
                <Icon size="16" mini src={ArrowRight} />
                Next
            </Button>
        </div>
    </div>
</div>

<style>
    @media (min-width: 640px) {
        .table-of-contents {
            top: max(2rem, var(--scroll));
        }
    }
</style>
