<script>
    export let href;
    export let id;
    export let name = id;
    let icon = fetch(`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${id}.svg`).then((res) => res.text());
</script>

<a {href} class={$$props.class} title={name}>
    {#await icon then svg}
        {@html svg}
    {/await}
</a>

<style lang="scss">
    a {
        transition: box-shadow 440ms ease-in-out;
        :global(svg) {
            fill: var(--black-color);
        }

        @include box_shadow(1, $white);

        &:hover { @include box_shadow(2, $white) }
    }
</style>
