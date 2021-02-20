<script>
    import QuickConnectCell from "common/QuickConnectCell";
    import Title from "common/Title";
</script>

<footer>
    <Title heading>Contact</Title>
    <QuickConnectCell id="gmail" href="mailto:im@dcxo.dev" />
    <QuickConnectCell id="github" href="https://github.com/dcxo" />
    <QuickConnectCell id="linkedin" href="https://linkedin.com/in/dcxo" />
    <QuickConnectCell id="twitter" href="https://twitter.com/imdcxo" />
    <QuickConnectCell id="dev-dot-to" href="https://dev.to/dcxo" />
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

        :global(header) {
            flex: 1 0 100%;
            text-align: center;
            font-size: 1.618rem;
        }

        :global(a) {
            $size: 5rem;
            size: $size;
            padding: 24px;
            margin: 8px;

            @include box_shadow(2);
            &:hover {
                @include box_shadow(3);
            }
        }
    }
</style>
