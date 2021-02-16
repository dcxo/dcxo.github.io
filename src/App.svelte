<script charset="utf-8">
    import Header from "./header/Header.svelte";
    import Projects from "./projects/Projects.svelte";
    import Skills from "./skills/Skills.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<Header />
<main>
    <Skills />
    <Projects />
</main>

<style lang="scss" global>
    :root {
        --primary-color: #{$primaryColor};
        --secondary-color: #{$secondaryColor};
        --black-color: #{$black};
        --white-color: #{$white};
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
        color: var(--black-color);
    }

    body {
        display: flex;
        flex-direction: column;
    }

    main h1 {
        font-size: 2rem;
    }
    main * * * h1 {
        font-size: 1.5rem;
    }
</style>
