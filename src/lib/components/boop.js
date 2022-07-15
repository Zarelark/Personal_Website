// modified from https://svelte.dev/repl/bcccd7a1f43e41a4b824d6f50efe33a6?version=3.48.0
import { spring } from 'svelte/motion';

function getPrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}

export default function boop(node, params) {	
	let { setter } = params;
	let springyRotation = spring({ x: 0, y: 0, rotation: 0, scale: 1} , {
		stiffness: 0.1,
		damping: 0.1
	});
	let prefersReducedMotion = getPrefersReducedMotion();
	
	node.style = `display: inline-block`;
	
	const unsubscribe = springyRotation.subscribe(({ x, y, rotation, scale }) => {
		node.style.transform = !prefersReducedMotion && `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
	})
	
	return {
		update({isBooped, x = 0, y = 0, rotation = 0, scale = 1}) {
			springyRotation.set(isBooped ? { x, y, rotation, scale } : { x: 0, y: 0, rotation: 0, scale: 1});
		},
		destroy() {
			unsubscribe();
		}
	}
}