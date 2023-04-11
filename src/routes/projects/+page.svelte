<script>
    import Project from '$lib/misc/index/Project.svelte'
    import {
        Calculator,
        GlobeAlt,
        Icon,
        Language,
        Link,
        ShieldExclamation,
    } from 'svelte-hero-icons'
</script>

<title>Projects</title>
<div class="flex flex-col gap-4 justify-start items-start m-6 mx-4 w-full">
    <div class="flex flex-col gap-4 justify-start items-start m-4 max-w-2xl">
        <h1 class="text-4xl font-bold md:text-5xl">
            Apps, utilities, and other things I've made.
        </h1>
        <p class="opacity-80">
            All of these projects are open source, so if you find something
            interesting, take a look at its terrible code.
        </p>
    </div>
    <span class="mx-4 text-sm uppercase opacity-60">Coding projects</span>
    <section
        class="grid grid-cols-1 gap-x-6 gap-y-8 mx-4 sm:grid-cols-2 lg:grid-cols-3"
    >
        <Project url="https://imagi.xylight.us">
            <img
                src="/img/imagi.svg"
                width={36}
                height={36}
                class="bg-white rounded-full dark:bg-zinc-800"
                alt="Imagi logo"
                slot="image"
            />
            <span slot="title">Imagi</span>
            <span slot="description">
                A social app created with Pocketbase where everything updates in
                real time.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>imagi.xylight.us</span>
            </svelte:fragment>
        </Project>
        <Project url="https://neptune.xylight.us">
            <img
                src="/img/neptune.svg"
                width={36}
                height={36}
                class="bg-white rounded-full dark:bg-zinc-800"
                alt="Neptune logo"
                slot="image"
            />
            <span slot="title">Neptune</span>
            <span slot="description">
                A general-purpose, moderation, translation, and utility Discord
                bot meant to handle all aspects of your server.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>neptune.xylight.us</span>
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
                <span>xylight.us</span>
            </svelte:fragment>
        </Project>
        <Project url="https://git.xylight.us/Xylight/anti-youtube-redirect">
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
                <span>git.xylight.us</span>
            </svelte:fragment>imagi.xylight.us
        </Project>
        <Project url="https://github.com/Xyphyn/XyPVP">
            <div
                slot="image"
                class="grid place-items-center w-9 h-9 bg-white rounded-full dark:bg-zinc-800"
            >
                <img
                    src="/content/sword.webp"
                    width={28}
                    height={28}
                    class="rounded-full"
                    alt="Minecraft diamond sword"
                />
            </div>
            <span slot="title">XyPVP</span>
            <span slot="description">
                The plugin for a Minecraft server I was making a while back, it
                supports FFA, Duels, and more.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>github.com</span>
            </svelte:fragment>
        </Project>
    </section>
    <span class="mx-4 mt-4 text-sm uppercase opacity-60">Random Utilities</span>
    <section
        class="grid grid-cols-1 gap-x-6 gap-y-8 mx-4 sm:grid-cols-2 lg:grid-cols-3"
    >
        <Project url="https://git.xylight.us/Xylight/NumConvert">
            <Icon
                src={Calculator}
                size="36"
                slot="image"
                class="p-2 bg-white rounded-full dark:bg-zinc-800"
            />
            <span slot="title">NumConvert</span>
            <span slot="description">
                A stupid little rust app to convert numbers between bases.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>git.xylight.us</span>
            </svelte:fragment>
        </Project>
        <Project url="https://github.com/Xyphyn/MultiTranslate">
            <Icon
                src={Language}
                size="36"
                slot="image"
                class="p-2 bg-white rounded-full dark:bg-zinc-800"
            />
            <span slot="title">MultiTranslate</span>
            <span slot="description">
                A Kotlin library to translate text through many providers
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>github.com</span>
            </svelte:fragment>
        </Project>
    </section>
    <span class="mx-4 mt-4 text-sm uppercase opacity-60">Instances</span>
    <p class="mx-4 opacity-80">
        I host instances of many open source projects. I wouldn't use them as
        they can disappear at any time.
    </p>
    <section
        class="grid grid-cols-1 gap-x-6 gap-y-8 mx-4 sm:grid-cols-2 lg:grid-cols-3"
    >
        <Project url="https://libreddit.xylight.us">
            <img
                src="/img/libreddit.ico"
                width={36}
                height={36}
                class="bg-white rounded-full dark:bg-zinc-800"
                alt="Libreddit logo"
                slot="image"
            />
            <span slot="title">Libreddit</span>
            <span slot="description">
                A private and fast frontend to Reddit. It does not require JS.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>libreddit.xylight.us</span>
            </svelte:fragment>
        </Project>
        <Project url="https://git.xylight.us">
            <img
                src="/img/gitea.svg"
                width={36}
                height={36}
                class="p-1 bg-white rounded-full dark:bg-zinc-800"
                alt="Gitea logo"
                slot="image"
            />
            <span slot="title">Gitea</span>
            <span slot="description">
                Gitea is a git server that's easy to host.
            </span>
            <svelte:fragment slot="link-text">
                <Icon src={Link} size="16" mini />
                <span>git.xylight.us</span>
            </svelte:fragment>
        </Project>
    </section>
</div>
