<script>
    import Skill from "./Skill.svelte";
    import data from "./data.yml";
</script>

<section class="parent">
    <header>
        <h1>Skills</h1>
    </header>

    {#each data as { skills, title }}
        <section>
            <header>
                <h1>{title}</h1>
            </header>
            <ul>
                {#each skills.sort(({ fav: x }, { fav: y }) =>
                    x === y ? 0 : x ? -1 : 1
                ) as skill}
                    <li class="skill">
                        <Skill {...skill} />
                    </li>
                {/each}
            </ul>
        </section>
    {/each}
</section>

<style lang="scss">
    section.parent {
        min-height: 100vh;
        background-color: var(--primary-color);
        padding: 24px;

        section {
            ul {
                display: grid;
                list-style: none;
                gap: 8px;
                grid-template-columns: repeat(auto-fit, 80px);
            }
            header {
                flex: 1 0 100%;
                font-size: 1.25rem;
                padding: 16px 0 8px 0;
            }
        }
    }
</style>
