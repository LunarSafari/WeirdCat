import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Container, Header, Segment, Button, Divider, Modal, Form, Accordion} from 'semantic-ui-react'

export default class AspectAccordion extends React.Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		description: PropTypes.string
	}

	state = {
		isEditing: false,
		isSubmitting: false,
		name: this.props.name,
		description: this.props.description
	}

	render(){

	}
}