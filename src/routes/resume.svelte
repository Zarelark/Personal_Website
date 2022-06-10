<!-- Runs before page is rendered; gets list of posts-->
<script context="module">  
    export const load = async ({ fetch }) => {
      //const response = await fetch('https://gitconnected.com/v1/portfolio/zarelark')
      const response = await fetch('/api/resume.json')
      const resumeJSON = await response.json()
    
      return {
        props: {
          resume: resumeJSON
        }
      }
    }
</script>

<script>
  export let resume;
    import ResumeLeft from '$lib/components/ResumeLeft.svelte';
    import ResumeRight from '$lib/components/ResumeRight.svelte';
    import ResumeHeader from '$lib/components/ResumeHeader.svelte';
    import {resumeInfo} from '$lib/stores/resumeInfo' ;
    resumeInfo.initialize(resume);
</script>

<ResumeHeader/>
<div class=flex-container>
  <div class=flex-left><ResumeLeft/></div>
  <div class=flex-center/>
  <div class=flex-right><ResumeRight/></div>
</div>

<style>
  .flex-container{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    max-width: 100%;
  } 
    
  .flex-left {
    flex: 1 0 auto;
    margin: 1rem;
    width: 20%;
  }

  .flex-center{
    flex: 0 0 auto;
    min-width: 1rem;
  }
    
  .flex-right {
    flex: 2 0 auto;
    margin: 1rem;
    max-width: 50rem;
    width: 75%;
  }
</style>
