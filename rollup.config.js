import babel from "@rollup/plugin-babel"
import image from '@rollup/plugin-image';
import noderesolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.jsx',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    plugins: [
      commonjs(),
      noderesolve(),
      terser(),
      babel({
        exclude: "node_module/**",
        presets: ['@babel/preset-react']
      }),
      image()
    ]
};