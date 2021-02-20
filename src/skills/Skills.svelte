<script>
    import Skill from "./Skill";
    import data from "./data";
    import Title from "common/Title";
</script>

<section class="parent">
    <Title heading>Skills</Title>

    {#each data as { skills, title }}
        <section>
            <Title>{title}</Title>
            <ul>
                {#each skills.sort(({ fav: x }, { fav: y }) => (x === y ? 0 : x ? -1 : 1)) as skill}
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
            margin-bottom: 8px from-md(16px) from-lg(48px);
            ul {
                --cell-size: 80px from-md(90px) from-lg(110px);
                display: grid;
                list-style: none;
                gap: 8px from-lg(16px);
                grid-template-columns: repeat(auto-fit, var(--cell-size));
                justify-content: center from-md(start);
            }
        }
    }
</style>
