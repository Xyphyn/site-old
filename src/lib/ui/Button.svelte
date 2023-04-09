<script lang="ts">
    import { Color } from '$lib/colors'

    export let color: Color = Color.secondary
    export let onclick: () => any = () => {}
    export let href = ''
    export let link = false
    export let label = ''
    let clazz = ''
    export { clazz as class }
</script>

{#if !link}
    <button
        on:click={onclick}
        class="flex flex-row items-center gap-2 text-sm rounded-md px-3 py-1.5 transition-all {color} {clazz}"
        aria-label={label}
    >
        <slot />
    </button>
{:else}
    <a
        {href}
        class="flex flex-row items-center gap-2 text-sm rounded-md px-3 py-1.5 transition-all no-underline {color} {clazz}"
        aria-label={label}
    >
        <slot />
    </a>
{/if}
