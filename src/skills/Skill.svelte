<script>
    import icons from "../icons/**/*.svg";

    const idToName = (id) => id.charAt(0).toUpperCase() + id.slice(1);

    export let id;
    export let name = idToName(id);
    export let offset = 0;
    export let fav = false;
    export let href = undefined;

    let icon = icons.filter(i => i.fileName.endsWith(`/${id}.svg`))[0].module
</script>

<a {href} title={name} tabindex={0} target="_blank" style={`--offset: ${offset}px`} rel='noopener'>
    {@html icon}

    {#if fav}
        <svg class="fav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Favorite</title>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    {/if}
</a>

<style lang="scss">
    a {
        display: block;
        background-color: var(--white-color);
        position: relative;
        padding: calc(24px - var(--offset));
        border-radius: 8px;
        transition: box-shadow 440ms ease-in-out;
        z-index: 0;

        @include box_shadow(2);

        &:hover, &:focus {
            @include box_shadow(3);
            outline: none;
            
            :global(svg) {
                fill: var(--secondary-color)
            }
        }

        :global(svg) {
            fill: var(--black-color);
            transition: fill 440ms ease-in-out;
            display: block;
        }

        svg.fav {
            position: absolute;
            size: 24px;
            top: 0;
            right: 8px;
            transform: translateY(-37%);
            z-index: -2;
            fill: var(--secondary-color);
        }
    }
</style>
