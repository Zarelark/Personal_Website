<script>
    import "$lib/styles/vars.scss"

    export let sectionTitle;
    
    let show = true;

    function toggleShow(){
        show = !show;
    }
</script>

<div class=section>
    <div class=section-title on:click="{toggleShow}">
        {sectionTitle}
        <svg fill="none" style="display:inline-block;vertical-align:middle" height="32" width="32" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            {#if show}
                <polyline points="5 15 11.5 10 18 15"></polyline>
            {:else}
                <polyline points="5 10 11.5 15 18 10"></polyline>
            {/if}
        </svg>
    </div>
    <hr class=line>
    {#if show} <slot/> {/if}
</div>

<style lang="scss">
    @use "./src/lib/styles/vars.scss";
    
    .section{
        width: 100%;
    }

    svg {
        color: vars.$color6;
    }

    .section-title{
        font-size:x-large;
        font-weight: 300;
        font-variant-caps: all-small-caps;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .line {
        background-color: vars.$color1;
        margin-left: 0;
        size: 5em;
        height: 2px;
        display: block;
        border: 0;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 0;
        width: 5%;
        min-width: 30px;
    }
</style>