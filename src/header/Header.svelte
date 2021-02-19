<script>
    import QuickConnect from "./QuickConnect";
    import Typewriter from "./Typewriter";
</script>

<header>
    <h1>Hi! I'm <span>David</span></h1>
    <h2>I'm <Typewriter words={["autodidact", "communicative", "a backend dev", "a web dev"]} /></h2>
    <QuickConnect class="qc" />
</header>

<style lang="scss">
    header {
        background-color: var(--black-color);
        size: 100% 100vh;
        color: var(--white-color);
        display: grid;
        grid-template-columns: 1fr from-lg(1fr min-content);
        grid-template-rows: min-content min-content 1fr from-lg(min-content min-content);
        align-content: from-lg(center);
        padding: 48px;
        font-size: 1.2rem from-lg(2rem);

        h2 {
            grid-row: from-lg(2);
            grid-column: from-lg(1);
        }

        h1 {
            align-self: end;
            span {
                color: var(--primary-color);
            }
        }

        :global(.qc) {
            align-self: end;
            grid-row: from-lg(span 2);
        }
    }
</style>
