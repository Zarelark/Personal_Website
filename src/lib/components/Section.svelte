<script>
    import "$lib/styles/vars.scss"
    import ExternalLinkIcon from "../icons/ExternalLinkIcon.svelte";
    import ResumeSection from "./ResumeSection.svelte";

    export let sectionTitle;
    export let sectionSummary;
    export let entries;
    
    let show = true;

    function toggleShow(){
        show = !show;
    }

    function dateToString(date){
        let now = new Date();
        if (date < now){
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
            const month = months[date.getMonth()];
            return month + '/' + date.getFullYear();
        } else {
            return 'Present';
        }
    }
</script>

<ResumeSection sectionTitle={sectionTitle}>
        {#if sectionSummary}
            <p>{sectionSummary}</p>
        {/if}

        {#if entries}
            {#each entries as entry}
                {#if entry.active}
                    <div class=entry>
                        <div class=flex-container>
                            <div class=flex-item-entrytitles>
                                <h3 class=entry-title>{entry.title}{#if entry.titleLink}<ExternalLinkIcon link={entry.titleLink}/>{/if}</h3>
                                <h4 class=entry-subtitle>{entry.subtitle}</h4>
                            </div>
                            
                            <div class=flex-item-entrydate><p>{dateToString(entry.date1)} {#if entry.date2} - {dateToString(entry.date2)}{/if}</p></div>
                        </div>
                        
                        <div class=entry-summary>{entry.text}</div>
                        <ul class=entry-highlights>
                            {#each entry.bullets as bullet}
                                <li>{bullet}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            {/each}
        {/if}
</ResumeSection>

<style lang="scss">
    @use "./src/lib/styles/vars.scss";
    
    .entry{
        margin-bottom: 2em;
        margin-top: 0;
    }

    .entry-title{
        margin-bottom: 0;
    }

    .entry-subtitle{
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 0;
    }

    .flex-item-entrydate{
        font-variant-caps: all-petite-caps;
        font-size: large;
        font-weight: 150;
    }

    .flex-item-entrytitles{
        margin-bottom: 0;
    }

    .flex-container {
        display:inline-flex;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
    }

    .entry-summary{
        margin-top: 0.5em;
    }
</style>