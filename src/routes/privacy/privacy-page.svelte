<script lang="ts">
    import Button from '$lib/ui/Button.svelte'
    import { Bars3, Icon, XMark } from 'svelte-hero-icons'

    export let title = ''

    let open = true
</script>

<title>{title}</title>
<div class="flex flex-row justify-center p-4 w-full">
    <nav
        class="{open
            ? 'flex'
            : 'hidden'} p-4 pt-16 fixed left-0 top-0 sm:relative flex-col gap-2 w-64 sm:flex sm:bg-transparent
             sm:dark:bg-transparent bg-white dark:bg-slate-800 h-screen z-30 shadow-2xl sm:shadow-none"
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
    <div class="flex flex-col gap-4 m-4 w-full max-w-2xl text-left sm:m-8">
        <Button onclick={() => (open = true)} class="py-3 w-max sm:hidden">
            <Icon src={Bars3} size="20" />
        </Button>
        <slot />
    </div>
</div>
