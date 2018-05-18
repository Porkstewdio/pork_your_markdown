import buble from 'rollup-plugin-buble';
import minify from 'rollup-plugin-minify-es';
export default {
  entry: 'source/main.js',
  dest: 'output/pumd.js',
  format: 'iife',
  plugins: [ buble(), minify() ]
};