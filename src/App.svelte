<script charset="utf-8">
    import Header from "./header/Header.svelte";
    import Skills from "./skills/Skills.svelte";
</script>

<svelte:head />

<Header />
<main>
    <Skills />
</main>

<style lang="scss" global>
    :root {
        --primary-color: #f7b42c;
        --secondary-color: #bc75fa;
        --black-color: #262626;
        --white-color: #d9d9d9;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 16px;
        font-family: "Inter", sans-serif;
        width: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
    }
</style>
