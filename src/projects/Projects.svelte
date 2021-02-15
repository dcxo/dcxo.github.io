<script>
    import projects from "./data.yml";
    import Project from "./Project.svelte";
</script>

<section>
    <header><h1>Projects</h1></header>
    <ul>
        {#each projects as project}
            <li >
                <Project class="project" {...project} />
            </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    section {
        background-color: var(--black-color);
        color: var(--white-color);
        padding: 24px;
        min-height: 100vh;

        header {
            margin: 0 0 12px 0;
        }

        ul {
            list-style: none;
            display: grid;
            grid-auto-flow: row;
            grid-auto-rows: 100px;
            gap: 16px;
            margin: 0 auto;

            @include tablet {
                max-width: 100%;
                grid-template-columns: 1fr 1fr;
                align-items: stretch;
            }
            @include desktop {
                max-width: 75vw;
            }
        }
    }
</style>
