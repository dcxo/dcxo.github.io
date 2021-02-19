<script>
    export let href;
    export let id;
    export let name = id;
    import InlineSVG from "svelte-inline-svg";
</script>

<a {href} class={$$props.class} title={name} target='_blank'>
    <InlineSVG src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${id}.svg`} />
</a>

<style lang="scss">
    a {
        transition: box-shadow 440ms ease-in-out;
        :global(svg) {
            transition: fill 440ms ease-in-out;
            fill: var(--black-color);
        }

        &:active, &:focus {
            outline: none;
            border: none;

            @include box_shadow(3, $white);

            :global(svg) {
                fill: var(--primary-color);
            }
        }

        @include box_shadow(1, $white);

        &:hover { @include box_shadow(2, $white) }
    }
</style>
