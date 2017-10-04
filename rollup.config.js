/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */

import alias       from 'rollup-plugin-alias';
import commonjs    from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify      from 'rollup-plugin-uglify';
import {minify}    from 'uglify-es';

import path from 'path';

export default {
	input: 'src/Thymeleaf.js',
	output: {
		file: 'dist/thymeleaf.min.js',
		format: 'iife',
		name: 'Thymeleaf'
	},
	plugins: [
		alias({
			fs:    path.join(__dirname, 'browser/mock-fs'),
			jsdom: path.join(__dirname, 'browser/mock-jsdom')
		}),
		commonjs(),
		nodeResolve({
			jsnext: true
		}),
		uglify({}, minify)
	],
	sourcemap: true
};
