import React, { Component } from 'react'

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>
	}
	return <p>The water would not boil.</p>
}

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = { temperature: ''}
	}
}