<script>

    export let href;
    export let id;
    export let name = id;

</script>

<a {href} class={$$props.class}>

    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/{id}.svg" alt="{name}">

</a>
