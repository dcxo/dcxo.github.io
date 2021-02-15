<script>
    import  Icon from "svelte-material-icons/OpenInNew.svelte";

    export let name;
    export let desc = "";
    export let techs;
    techs = techs.map(tech => tech.split(', '))
    export let url;
</script>

<a href={url} class={$$props.class} target="_blank">
    <article>
        <header><h1>{name}</h1></header>
        <p>{desc}</p>
        
        <footer>
            <button>
                <Icon />
            </button>
        </footer>
    </article>
</a>

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

            button {
                background-color: var(--secondary-color);
                border: none;
                padding: 8px;
                border-radius: 4px;
            }
        }

    }
</style>
