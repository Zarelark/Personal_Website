# Personal Website

Personal website with blog and interactive resumer-viewer built in Svelte with SvelteKit.

The initial website structure and blog functionality was implemented based on this excellent blog post by Josh Collinsworth: [`Let's learn SvelteKit by building a static Markdown blog from scratch`](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog).

I then added the resume viewer section. The resume viewer fetches resume data in [`JSON Resume`](https://jsonresume.org/schema/) format and uses it to populate the page. The skills section of the resume data are rendered as buttons that allow the user to sort the resume for work experiences and projects that pertain to that skill.