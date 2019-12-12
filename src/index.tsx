import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import './css/index.scss'

class App extends Component {
	render() {
		return <h1>Testing 123</h1>
	}
}

render(<App />, document.getElementById('root'))
