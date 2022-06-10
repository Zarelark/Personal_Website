<!-- 
This is layout will apply to all markdown routes in the /blog/ directory
unless explicetly opted out by including layout: false in the frontmatter.
-->
<script>
    export let title
    export let date
</script>
  
<h1>{title}</h1>
  
<p>Published: {date}</p>
  
<slot />