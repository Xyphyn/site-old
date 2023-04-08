<script lang="ts">
    import { Color } from '$lib/colors'

    export let color: Color = Color.accent
    export let onclick: () => any = () => {}
    export let href = ''
    export let link = false
    let clazz = ''
    export { clazz as class }
</script>

{#if !link}
    <button
        on:click={onclick}
        class="text-sm rounded-md px-3 py-1.5 transition-all {color} {clazz}"
    >
        <slot />
    </button>
{:else}
    <a
        {href}
        class="text-sm rounded-md px-3 py-1.5 transition-all no-underline {color} {clazz}"
    >
        <slot />
    </a>
{/if}
