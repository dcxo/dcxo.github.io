<script>
    import QuickConnectCell from "common/QuickConnectCell";
    import Title from "common/Title";
</script>

<footer>
    <h2>Contact</h2>
    <QuickConnectCell id="gmail" href="mailto:im@dcxo.dev" />
    <QuickConnectCell id="github" href="https://github.com/dcxo" />
    <QuickConnectCell id="linkedin" href="https://linkedin.com/in/dcxo" />
    <QuickConnectCell id="twitter" href="https://twitter.com/imdcxo" />
    <QuickConnectCell id="telegram" href="https://t.me/imdcxo" />
    <QuickConnectCell id="post" href="https://blog.dcxo.dev" />
</footer>

<style lang="scss">
    footer {
        background-color: var(--primary-color);
        position: relative;
        padding: 32px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        h2 {
            flex: 1 0 100%;
            text-align: center;
            font-size: 2.618rem;
            margin-bottom: 16px;
        }

        :global(a) {
            $size: 5rem;
            size: $size;
            padding: 24px;
            margin: 8px;

            @include box_shadow(2);
            &:hover, &:active, &:focus {
                @include box_shadow(3);
            }
        }
    }
</style>
