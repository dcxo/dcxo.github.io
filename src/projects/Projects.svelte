<script>
    import Title from "common/Title";
    import projects from "./data";
    import Project from "./Project";
</script>

<section>
    <Title heading>Projects</Title>
    <ul>
        {#each projects as project}
            <li>
                <Project class="project" {...project} />
            </li>
        {/each}
    </ul>
    <footer>
        More to come...
    </footer>
</section>

<style lang="scss">
    section {
        background-color: var(--black-color);
        color: var(--white-color);
        padding: 24px;
        min-height: 100vh;

        ul {
            list-style: none;
            display: grid;
            grid-auto-flow: row;
            grid-auto-rows: 168px;
            gap: 16px from-lg(24px);
            margin: 0 auto;
            max-width: unset md-lg(100%) from-lg(75vw);
            grid-template-columns: unset from-md(1fr 1fr);
            align-items: stretch;
        }

        footer {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            margin: 5rem;
            opacity: 0.5;
        }
    }
</style>
