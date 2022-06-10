<!--
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
-->
<script>
    import {selectedSkills} from '$lib/stores/selectedSkills';
    import BoopAction from './BoopAction.svelte';
    export let skill;
    
    let experience = 0;    
    switch (skill.level) {
        case "Expert":
            experience = 5;
            break;
        case "Advanced":
            experience = 4;
            break;
        case "Intermediate":
            experience = 3;
            break;
        case "Beginner":
            experience = 2;
            break;
        case "Learning":
            experience = 1;
        break;
    }

    $: active = $selectedSkills.has(skill.name)

    function toggleSkill() {
        selectedSkills.toggleSkill(skill.name);
        skill.keywords.forEach(word => selectedSkills.toggleSkill(word));
    }
</script>


<BoopAction boopParams={{ scale: 1.2, timing: 200 }}>
    <div class:active='{active}' class=skill-box
        on:click="{toggleSkill}">    
        <div class=name>{skill.name}</div>
        {#if experience > 0}
            <div class=flex-container>
                {#each Array(experience) as _}
                    <hr class=skill-bar width="{30*experience}em">
                {/each}
            </div>
        {/if}
        
        {#if skill.keywords.length}
            <div class=keywords>{skill.keywords.join(', ')}</div>
        {/if}
    </div>
</BoopAction>


<style lang="scss">
    @use "./src/lib/styles/vars.scss";
    .skill-box {
		width: 100%;
		height: calc(40*11/8.5)vw;
		padding: 1em 1em 1em 1em;
		box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.217);
		margin: 10px 0;
        background-color: vars.$color2;

	}

    .flex-container {
        display: flex;
        justify-content:flex-start;
        
    }

    .skill-bar {
        margin-right: 2%;
        margin-left: 0;
        size: 5em;
        height: 3px;
        display: block;
        border: none;
        padding-top: 0;
        background-color: vars.$color6;
        color: vars.$color6;
        width: 18%;
    }

    .active {
		background-color: vars.$color4;
		color: white;
	}

    .keywords {
        font-size: x-small;
    }

    .name{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1.2em;
        text-align: left;
        margin-bottom: 0;
        padding-bottom: 0;
        border: 0;
        height: 1em;
    }
    
</style>