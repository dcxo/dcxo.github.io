<script>
    import QuickConnect from "./QuickConnect.svelte";
    import Typewriter from "./Typewriter.svelte";
</script>

<header>
    <h1>Hi! I'm <span>David</span></h1>
    <h2>I'm <Typewriter words={["autodidact", "communicative", "a backend dev", "a web dev"]} /></h2>
    <QuickConnect class="qc" />
</header>

<style lang="scss">
    header {
        background-color: var(--black-color);
        width: 100%;
        height: 100vh;
        color: var(--white-color);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content 1fr;
        /* align-content: center; */
        padding: 64px;
        font-size: 1.2rem;

        @include desktop {
            grid-template-columns: 1fr min-content;
            grid-template-rows: min-content min-content;
            align-content: center;
            font-size: 2rem;

            h2 {
                grid-row: 2;
                grid-column: 1;
            }
        }

        h1 {
            align-self: end;
            span {
                color: var(--primary-color);
            }
        }

        :global(.qc) {
            align-self: end;
            @include desktop {
                grid-row: span 2;
            }
        }
    }
</style>
