<script>
    export let heading = false;
    export let sub = false;
</script>

<header style="--margin-top: {heading ? 0 : 8}px; --margin-bottom: {sub ? 0 : 16}px">
    <h1>
        <slot/>
    </h1>
</header>

<style lang="scss">
    header {
        margin-top: var(--margin-top);
        margin-bottom: var(--margin-bottom, px);
    }
</style>