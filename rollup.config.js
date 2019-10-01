import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === 'production';

const paths = {
	src: 'src/main/javascript',
	dist: 'target/classes/static'
};

const bundle = (input, output) => ({
	input: input,
	output: {
		file: output,
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		isProduction && terser()
	].filter(Boolean)
});

export default [
	bundle(`${paths.src}/bundles/bundle-1.js`, `${paths.dist}/js/bundle-1.js`),
	bundle(`${paths.src}/bundles/bundle-2.js`, `${paths.dist}/js/bundle-2.js`),
];
