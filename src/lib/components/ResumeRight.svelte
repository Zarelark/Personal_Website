<script>
    export let resume;
    import Section from "./Section.svelte";

    import { resumeInfo } from '$lib/stores/resumeInfo';
    
</script>

<Section sectionTitle="Summary" sectionSummary={$resumeInfo.basics.summary}></Section>

{#if $resumeInfo.entries.work}
    <Section sectionTitle="Experience" entries={$resumeInfo.entries.work}/>
{/if}

{#if $resumeInfo.entries.education}
    <Section sectionTitle="Education" entries={$resumeInfo.entries.education}/>
{/if}

{#if $resumeInfo.entries.projects}
    <Section sectionTitle="Projects" entries={$resumeInfo.entries.projects}/>
{/if}