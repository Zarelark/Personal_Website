import { writable } from 'svelte/store';



function createSkills() {
	const { subscribe, set, update } = writable(new Set());

	return {
		subscribe,
		toggleSkill: (skill) => update(s => {
			if(s.delete(skill)){
				return s;
			} else {
				return s.add(skill)
			}
		}),
		reset: () => set(new Set()),
		update
	};
}

export const selectedSkills = createSkills();