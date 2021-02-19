<script charset="utf-8">
    import Header from "header/Header";
    import Projects from "projects/Projects";
    import Skills from "skills/Skills";
</script>

<svelte:head>
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

    noscript {
        width: 75%;
        background-color: #ff000033;
        color: red;
        margin: 16px auto;
        padding: 16px;
        border: 1px solid red;
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
