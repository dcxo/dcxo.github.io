import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import yaml from '@rollup/plugin-yaml';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import { join } from 'path';
import { cwd } from 'process';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/main.js',
    output: {
        sourcemap: !production,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production
            },
            preprocess: sveltePreprocess({
                scss: {
                    prependData: `@import 'src/global.scss';`
                }
            })
        }),
        yaml(),
        css({ output: 'bundle.css' }),

        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),

        !production && serve(),

        !production && livereload('public'),

        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};
