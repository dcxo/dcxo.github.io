<script>
    import Title from "common/Title";
    import imgs from "../imgs/**/*.png";
    import icons from "../icons/**/*.svg";

    export let name;
    export let desc = "";
    export let techs;
    techs = techs.map((tech) => icons.filter((i) => i.fileName.endsWith(`/${tech}.svg`))[0].module);
    export let url;
    export let imgUrl = undefined;

    let img = imgs.filter((i) => i.fileName === imgUrl)[0];
    if (img) img = img.module.default;

    function click() {
        window.open(url, "_blank").focus();
    }
</script>

<article class={$$props.class} tabindex={0} on:click={url ? click : null}>
    <Title heading sub>
        {name}
    </Title>
    <img src={img} alt="" aria-hidden="true" />
    <p>{desc}</p>

    <footer>
        <ul>
            {#each techs as tech}
                <li>{@html tech}</li>
            {/each}
        </ul>
        <div>
            <svg viewBox="0 0 24 24">
                <title>Abrir proyecto</title>
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
        </div>
    </footer>
</article>

<style lang="scss">
    article {
        background-color: var(--white-color);
        color: var(--black-color);

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content 1fr min-content;

        overflow: hidden;
        border-radius: 4px;
        height: 100%;
        transition: box-shadow 440ms ease-in-out;
        position: relative;
        cursor: pointer;

        @include box_shadow(2, white);

        &:hover {
            @include box_shadow(3, white);
        }

        img {
            grid-row: 1 / span 3;
            grid-column: 2;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            mask: linear-gradient(to left, black, transparent);
        }

        :global(h1) {
            padding: 8px 8px;
        }

        p {
            padding: 0px 8px;
            grid-row: 2;
            grid-column: 1;
        }

        footer {
            display: flex;
            align-self: flex-end;
            justify-content: space-between;
            grid-row: 3;
            grid-column: 1 / span 3;
            margin: 8px;
            z-index: 1;

            ul {
                display: flex;
                list-style: none;
            }

            :global(svg) {
                size: 1rem;
                display: block;
                fill: var(--black-color);
                margin: 8px;
            }

            div {
                background-color: var(--secondary-color);
                border: none;
                border-radius: 4px;
                color: var(--black-color);
                transition: box-shadow 440ms ease-in-out;

                @include box_shadow(2, $black);
            }
        }
    }
</style>
