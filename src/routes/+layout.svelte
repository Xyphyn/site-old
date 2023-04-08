<script lang="ts">
    import Navbar from '../lib/component/Navbar.svelte'
    import '../style/app.css'
    import { navigating } from '$app/stores'
    import nprogress from 'nprogress'
    import 'nprogress/nprogress.css'

    nprogress.configure({
        minimum: 0.4,
        trickleSpeed: 100,
        showSpinner: false,
    })

    $: {
        if ($navigating) {
            nprogress.start()
        }
        if (!$navigating) {
            nprogress.done()
        }
    }
</script>

<Navbar />
<slot />
