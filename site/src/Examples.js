import React, { Component } from 'react';
import Consoled from '../../src';
import CodeMirror from 'react-codemirror';

let opts = {
	lineNumbers: false,
	mode: "jsx",
	readOnly: true
}

class First extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div className="example">
				<CodeMirror value={`import React from 'react';
import ReactDOM from 'react-dom';
import Consoled from 'react-consoled';

ReactDOM.render(<Consoled>1+1</Consoled>, el)`} options={opts} />
				<div>
					<Consoled>1+1</Consoled>
				</div>
			</div>
		);
	}
}



class Log extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	toggleCode = () => {
		this.setState({
			showCode: !this.state.showCode
		})
	}

	load = () => {
		this.setState({
			code: (this.refs.code.innerText || this.refs.code.textContent)
		})
	}

	render() {
		return (
			<div className="example">
				<CodeMirror value={`<Consoled>` + this.props.code + `</Consoled>`} options={opts} />
				<div>
					<Consoled>{this.props.code}</Consoled>
				</div>
			</div>
		);
	}
}

class Simple extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code: this.props.code,
			showCode: false,
		};
	}

	componentDidMount(){
		if(!this.props.hideShowButton){
			this.refs.code.focus()
		}
	}

	toggleCode = () => {
		this.setState({
			showCode: !this.state.showCode
		})
	}

	load = () => {
		this.setState({
			code: (this.refs.code.innerText || this.refs.code.textContent)
		})
	}

	render() {
		return (
			<div className="example">
				{ !this.props.hideShowButton && <a onClick={this.toggleCode}>{ this.state.showCode ? 'hide' : 'show' }</a> }
				{ this.state.showCode && <CodeMirror value={`class Simple extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code: this.props.code,
		};
	}

	load = () => {
		this.setState({
			code: (this.refs.code.innerText || this.refs.code.textContent)
		})
	}

	render() {
		return (
			<div>
				<span ref="code" contentEditable={true}>{this.state.code}</span>
				<button onClick={this.load}>=></button> 
				<Consoled code={this.state.code} {...{
					container: result => <span className="result"> {result}</span>,
					value: row => row,
					error: err => <i style={{color: 'red'}}>{err.message}</i>,
				}} />
			</div>
		);
	}
}
`} options={{
		lineNumbers: false,
		mode: "jsx"
	}} /> }
				<div>
					<span ref="code" contentEditable={true} onfocus="this.value = this.value;">{this.state.code}</span>
					<button onClick={this.load}>=></button> 
					<Consoled{...{
						container: result => <span className="result"> {result}</span>,
						value: row => row,
						error: err => <i style={{color: 'red'}}>{err.message}</i>,
					}}>{this.state.code}</Consoled>
				</div>
			</div>
		);
	}
}

// class Simple2 extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			code: 'dasasd'
// 		};
// 	}

// 	load = () => {
// 		this.setState({
// 			code: (this.refs.code.innerText || this.refs.code.textContent)
// 		})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<span ref="code" contentEditable={true}>{this.state.code}</span>
// 				<button onClick={this.load}>is</button> 
// 				<Consoled code={this.state.code} {...{
// 					container: result => <span>{result}</span>,
// 					value: row => row,
// 					error: err => <i>{err.message}</i>,
// 				}} />
// 				</div>
// 		);
// 	}
// }

class Loop extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		// let s = {
		// 	display: 'inline-block',
		// 	margin: '2px',
		// 	fontSize: '14px',
		// 	background: 'rgba(0, 0, 0, 0.13)',
		// 	borderRadius: '10px',
		// 	padding: '2px 6px'
		// }

		// let tmpl = {
		// 	consoleLog: (row, i) => <style key={i} style={s}>{row}</style>
		// };

		return (
			<div className="example">
				<CodeMirror value={"<Consoled>{`\n\tfor (var i=0; i<5; i++) {\n\t\tconsole.log(i);\n\t}\n`}</Consoled>"} options={{ lineNumbers: false, mode: "jsx"}} />
				<Consoled>
					{`
						for (var i=0; i<5; i++) {
						  console.log(i);
						}
					`}
				</Consoled>
			</div>
		);
	}
}


class ConsoleLogs extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		let s = {
			display: 'inline-block',
			margin: '2px',
			fontSize: '14px',
			background: 'rgba(0, 0, 0, 0.13)',
			borderRadius: '10px',
			padding: '2px 6px'
		}

		let tmpl = {
			consoleLog: (row, i) => <span key={i} style={s}>{row}</span>
		};

		return (
			<div className="example">
				<CodeMirror value={`let s = {
	display: 'inline-block',
	margin: '2px',
	fontSize: '14px',
	background: 'rgba(0, 0, 0, 0.13)',
	borderRadius: '10px',
	padding: '2px 6px'
}

let tmpl = {
	consoleLog: (row, i) => <span key={i} style={s}>{row}</span>
};

<Consoled {...tmpl}>
	console.log(1);
	console.log(2); 
	console.log(3); 
</Consoled>`} options={{ lineNumbers: false, mode: "jsx"}} />
				<Consoled {...tmpl}>
					console.log(1);
					console.log(2); 
					console.log(3); 
				</Consoled>
			</div>
		);
	}
}

export {
	First,
	Log, 
	Simple, 
	Loop,
	ConsoleLogs
};
