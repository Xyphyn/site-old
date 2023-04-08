<script lang="ts">
    import { Icon, Link } from 'svelte-hero-icons'

    export let url = ''
</script>

<a
    href={url}
    class="flex flex-col items-start p-6 w-full rounded-lg transition-all cursor-pointer hover:bg-slate-100 hover:dark:bg-zinc-800 group"
>
    <div
        class="grid place-items-center w-10 h-10 rounded-full shadow-lg bg-slate-300 dark:bg-zinc-700"
    >
        <slot name="image" />
    </div>
    <h1 class="mt-4 font-bold"><slot name="title" /></h1>
    <p class="mt-2 text-sm opacity-90">
        <slot name="description" />
    </p>
    <p
        class="flex gap-2 justify-self-end items-center mt-4 text-sm opacity-50 transition-colors group-hover:text-primary"
    >
        <slot name="link-text" />
    </p>
</a>
