<script>
    const idToName = (id) => id.charAt(0).toUpperCase() + id.slice(1);

    export let id;
    export let name = idToName(id);
    export let offset = 0;
    export let favorite = false;
</script>

<div class={$$props.class} style="--offset: {offset}px">
    <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/{id}.svg"
        alt={name}
    />

    {#if favorite}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <title>Favorite</title>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
        </svg>
    {/if}
</div>

<style lang="scss">
    div {
        background-color: var(--white-color);
        position: relative;
        padding: calc(24px - var(--offset));
        border-radius: 8px;
        box-shadow: 0px 4px 8px 0px rgba(black, 0.2);
        transition: box-shadow 440ms ease-in-out;
        z-index: 0;

        &:hover {
            box-shadow: 0px 6px 12px 0px rgba(black, 0.3);
        }

        svg {
            position: absolute;
            top: 0;
            right: 8px;
            transform: translateY(-37%);
            z-index: -2;
            fill: var(--secondary-color);
        }
    }
</style>
