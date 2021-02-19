<script>
    import QuickConnectCell from "./QuickConnectCell";
</script>

<div class={$$props.class}>
    <QuickConnectCell class="qcc" id="gmail" name="Email" href="mailto:im@dcxo.dev" />
    <QuickConnectCell class="qcc" href="https://github.com/dcxo" id="github" />
    <QuickConnectCell class="qcc" href="https://linkedin.com/in/dcxo" id="linkedin" />
</div>

<style lang="scss">
    div {
        margin: 0 auto;
        display: grid;
        grid-auto-columns: 64px from-lg(80px);
        grid-auto-rows: 64px from-lg(80px);

        :global(.qcc) {
            background-color: var(--white-color);
            border-radius: 50%;
            padding: 16px;

            &:nth-child(1) {
                grid-row: 1 from-lg(2);
                grid-column: 2 from-lg(1);
            }
            &:nth-child(2) {
                grid-row: 2 from-lg(1);
                grid-column: 1 from-lg(2);
            }
            &:nth-child(3) {
                grid-row: 2 from-lg(3);
                grid-column: 3 from-lg(2);
            }

        }
    }
</style>
