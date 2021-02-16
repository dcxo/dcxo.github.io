<script>
    import { onMount } from "svelte";

    export let name;
    export let desc = "";
    export let techs;
    export let url;
    function click() {
        window.location = url;
    }
</script>

<article class={$$props.class} tabindex={0} on:click={click}>
    <header><h1>{name}</h1></header>
    <p>{desc}</p>

    <footer>
        <div>
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <title>Abrir proyecto</title>
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
        </div>
    </footer>
</article>

<style lang="scss">
    a {
        text-decoration: none;
    }

    article {
        background-color: var(--white-color);
        color: var(--black-color);
        border-radius: 4px;
        padding: 8px;
        height: 100%;
        transition: box-shadow 440ms ease-in-out;
        position: relative;
        cursor: pointer;

        @include box_shadow(2, white);

        &:hover {
            @include box_shadow(3, white);
        }

        footer {
            display: flex;
            flex-direction: row-reverse;
            position: absolute;
            bottom: 8px;
            right: 8px;

            div {
                background-color: var(--secondary-color);
                border: none;
                padding: 8px;
                border-radius: 4px;
                color: var(--black-color);
                transition: box-shadow 440ms ease-in-out;

                @include box_shadow(2, $black);
                :global(svg) {
                    display: block;
                    fill: var(--black-color);
                }
            }
        }
    }
</style>
