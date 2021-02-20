<script>
    export let href;
    export let id;
    export let name = id;

    import icons from '../icons/*.svg';
    let icon = icons.filter(icon => icon.fileName.endsWith(`/${id}.svg`))[0].module
</script>

<a {href} class={$$props.class} title={name} target='_blank' rel='noopener'>
    {@html icon}
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
