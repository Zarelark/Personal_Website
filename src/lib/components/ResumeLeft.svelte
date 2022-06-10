<script>
    import Skill from '$lib/components/Skill.svelte';
    import ResumeSection from './ResumeSection.svelte';
    import Icon from '$lib/icons/Icon.svelte';
    import ExternalLinkIcon from '$lib/icons/ExternalLinkIcon.svelte';
    import { resumeInfo } from '$lib/stores/resumeInfo';
</script>

<div class=skill-container>
    <ResumeSection sectionTitle="Skills">
        {#each $resumeInfo.skills as skill}
            <Skill skill={skill} />
        {/each}
    </ResumeSection>

    <ResumeSection sectionTitle="About">
        <div class=flex-box>
        <span class=flex-line><Icon name=place/> {$resumeInfo.basics.locationAsString}</span>
        <span class=flex-line><Icon name=email/> <a href="mailto:{$resumeInfo.basics.email}">{$resumeInfo.basics.email}</a></span>
        {#each $resumeInfo.basics.profiles as profile}
            {#if profile.nework != "gitconnected"}
                <span class=flex-line><Icon name="{profile.network}"/> {profile.username} <ExternalLinkIcon link={profile.url}/></span>
            {/if}
        {/each}
        </div>
    </ResumeSection>


</div>

<style>
    .skill-container{
        margin-top: 0;
        display: flex;
        flex-direction: column;
    }

    .flex-box {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        font-size: 70%;
    }

    .flex-line {
        display: flex;
        justify-content: flex-start;
        gap: 8px;
        align-items: center;
        white-space: nowrap;
        
    }

    a{
        text-decoration: none;
        color: inherit;
    }
</style>

