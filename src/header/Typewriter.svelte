<script>
    import { tick } from "svelte";

    export let words = [];
    let currentWord = 0;
    let isGrowing = false;
    let word = words[currentWord];

    async function updateTitle() {
        if (!isGrowing && currentWord != words.length - 1) {
            word = word.slice(0, -1);
            if (word === "" || word === words[currentWord + 1].slice(0, word.length)) {
                currentWord++;
                isGrowing = true;
            }
        } else {
            word = words[currentWord].slice(0, word.length + 1);
            if (word === words[currentWord]) {
                isGrowing = false;
            }
        }

        if (currentWord != words.length) tick().then((_) => setTimeout(updateTitle, 150));
    }

    tick().then((_) => setTimeout(updateTitle, 800));
</script>

<span>{word}</span>