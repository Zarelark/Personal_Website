import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['svx','.md'],
			layout: {
				blog: 'src/routes/blog/_post.svelte'
			  }
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
