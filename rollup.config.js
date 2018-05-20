import buble from 'rollup-plugin-buble';
import minify from 'rollup-plugin-minify-es';
export default {
  input: 'source/main.js',
  output : {
    name : 'output/pumd.js',
    format: 'iife', 
    name : "PorkUrMarkDown"
  },
  plugins: [ buble(), minify() ]
};