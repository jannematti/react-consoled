import css from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'react-codemirror';
import { First, Simple, Simple2, Loop, ConsoleLogs } from './Examples';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';

let opts = {
	lineNumbers: false,
	mode: "jsx",
	readOnly: true
}

const App = () => (
	<div>
		<h1>REACT-CONSOLED</h1>
		<p>Output a javascript code inside a react component.</p>
	    <hr/>
	    <h2>Installation</h2>
	    <First />
	    <h2>Usage</h2>
	    <Loop />
	    <ConsoleLogs />
	    <hr/>
	    <h2>Props</h2>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Default</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="name">container</td>
					<td className="desc">A parent output element</td>
					<td className="default">
						<CodeMirror value={'(result) => <div className="consoled">{result}</div>'} options={opts} />
					</td>
				</tr>
				<tr>
					<td className="name">consoleLog</td>
					<td className="desc">A console.log output row</td>
					<td className="default">
						<CodeMirror value={'(row, i) => <div key={i} className="log">{row}</div>'}options={opts} />
					</td>
				</tr>
				<tr>
					<td className="name">value</td>
					<td className="desc">A value output</td>
					<td className="default">
						<CodeMirror value={'(row) => <div key="value" className="value">{row}</div>'} options={opts} />
					</td>
				</tr>
				<tr>
					<td className="name">error</td>
					<td className="desc">An error output</td>
					<td className="default">
						<CodeMirror value={'(e) => <div key="error" className="error">{err.name}: {err.message}</div>'} options={opts} />
					</td>
				</tr>
				<tr>
					<td className="name">onSuccess</td>
					<td className="desc">A callback function for a successful eval</td>
					<td className="default">
						<CodeMirror value={'() => {}'} options={opts} />
					</td>
				</tr>
				<tr>
					<td className="name">onError</td>
					<td className="desc">A callback function for an unsuccessful eval</td>
					<td className="default">
						<CodeMirror value={'() => {}'} options={opts} />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default App;
