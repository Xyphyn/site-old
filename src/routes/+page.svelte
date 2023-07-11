<script>
    import Colored from "$lib/component/Colored.svelte";
    import Project from "$lib/misc/index/Project.svelte";
    import {
        AtSymbol,
        Camera,
        GlobeAlt,
        Icon,
        Link,
        ShieldExclamation,
    } from "svelte-hero-icons";
</script>

<svelte:head>
    <title>Xylight</title>
</svelte:head>
<div class="grid grid-cols-1 gap-4 m-12 w-full">
    <span class="mx-4 text-sm uppercase opacity-60">About Me</span>
    <h1
        class="flex flex-col gap-4 justify-center items-start mx-4 mb-4 max-w-2xl"
    >
        <h1 class="text-4xl font-bold md:text-5xl">
            Hobbyist TypeScript, Go, and Svelte developer.
        </h1>
        <p class="opacity-80 text-base font-normal">
            I'm <strong>Xylight</strong>, and I aim to make software that is
            meant to help, entertain, or benefit people.
        </p>
    </h1>

    <span class="mx-4 text-sm uppercase opacity-60">Projects</span>
    <p class="mx-4 max-w-2xl opacity-80">
        I've made plenty of projects over a while, but here's the ones I'm most
        proud of. All of them are open-source, so you can look into their
        terrible code.
    </p>
    <section
        class="grid grid-cols-1 gap-x-6 gap-y-8 mx-4 sm:grid-cols-2 lg:grid-cols-3"
    >
        <Project url="https://photon.xylight.dev">
            <div
                class="bg-white rounded-full dark:bg-zinc-800 w-9 h-9 grid place-items-center"
                slot="image"
            >
                <Icon src={AtSymbol} width={20} />
            </div>
            <span slot="title">Photon</span>
            <span slot="description">
                A sleek web client for the decentralized social platform Lemmy.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>photon.xylight.dev</span>
            </svelte:fragment>
        </Project>
        <Project url="https://imagi.xylight.dev">
            <div
                class="bg-white rounded-full dark:bg-zinc-800 w-9 h-9 grid place-items-center"
                slot="image"
            >
                <Icon src={Camera} width={20} />
            </div>
            <span slot="title">Imagi</span>
            <span slot="description">
                A social app created with Pocketbase where everything updates in
                real time.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>imagi.xylight.dev</span>
            </svelte:fragment>
        </Project>
        <Project url="https://xylo.xylight.dev">
            <img
                src="https://xylo.xylight.dev/img/logo-background.svg"
                width={36}
                height={36}
                class="bg-white rounded-full dark:bg-zinc-800"
                alt="Xylo logo"
                slot="image"
            />
            <span slot="title">Xylo Bot</span>
            <span slot="description">
                A general-purpose, moderation, translation, and utility Discord
                bot meant to handle all aspects of your server.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>xylo.xylight.dev</span>
            </svelte:fragment>
        </Project>
        <Project url="/">
            <div
                slot="image"
                class="grid place-items-center w-9 h-9 bg-white rounded-full dark:bg-zinc-800"
            >
                <Icon src={GlobeAlt} size="24" class="rounded-full" />
            </div>
            <span slot="title">This Website!</span>
            <span slot="description">
                My old portfolio was insanely ugly, I hoped to fix that with
                this one.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>xylight.dev</span>
            </svelte:fragment>
        </Project>
        <Project url="https://git.xylight.dev/Xylight/anti-youtube-redirect">
            <div
                slot="image"
                class="grid place-items-center w-9 h-9 bg-white rounded-full dark:bg-zinc-800"
            >
                <Icon
                    src={ShieldExclamation}
                    size="24"
                    solid
                    class="text-red-400 rounded-full"
                />
            </div>
            <span slot="title">Anti Youtube Redirect</span>
            <span slot="description">
                A Firefox extension that strips the tracking parts out of
                YouTube outbound links.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>git.xylight.dev</span>
            </svelte:fragment>
        </Project>
    </section>
</div>
