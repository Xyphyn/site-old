<script lang="ts">
    export let url = ''
</script>

<a
    href={url}
    class="flex flex-col items-start px-6 py-4 text-sm no-underline rounded-lg transition-all cursor-pointer hover:bg-slate-100 hover:dark:bg-zinc-800 group"
>
    <div
        class="grid overflow-hidden place-items-center w-10 h-10 rounded-full shadow-lg bg-slate-300 dark:bg-zinc-700"
    >
        <div class="p-1 w-9 h-9 rounded-full bg-slate-200 dark:bg-zinc-800">
            <slot name="image" />
        </div>
    </div>
    <h1 class="mt-4 font-bold"><slot name="title" /></h1>
    <p class="mt-2 text-sm opacity-90">
        <slot name="description" />
    </p>
    <p
        class="flex gap-2 justify-self-end items-center mt-4 text-sm opacity-50 transition-all group-hover:text-primary group-hover:opacity-100"
    >
        <slot name="link-text" />
    </p>
</a>
