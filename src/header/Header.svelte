<script>
    import QuickConnect from "./QuickConnect.svelte";
    import { tick } from "svelte";

    let words = ["autodidact", "communicative", "a backend dev", "a web dev"];
    let currentWord = 0;
    let isGrowing = false;
    let title = words[currentWord];

    async function updateTitle() {
        if (!isGrowing && currentWord != words.length - 1) {
            title = title.slice(0, -1);
            if (
                title === "" ||
                title === words[currentWord + 1].slice(0, title.length)
            ) {
                currentWord++;
                isGrowing = true;
            }
        } else {
            title = words[currentWord].slice(0, title.length + 1);
            if (title === words[currentWord]) {
                isGrowing = false;
            }
        }

        if (currentWord != words.length)
            tick().then((_) => setTimeout(updateTitle, 150));
    }

    tick().then((_) => setTimeout(updateTitle, 800));
</script>

<header>
    <h1>Hi! I'm <span>David</span></h1>
    <h2>I'm {title}</h2>
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
