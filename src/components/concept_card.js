import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Container, Header, Segment, Button, Divider, Modal, Form} from 'semantic-ui-react'

export default class ConceptCard extends React.Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		alias: PropTypes.string,
		description: PropTypes.string
	}

	state = {
		isEditing: false,
		isSubmitting: false,
		name: this.props.name,
		alias: this.props.alias,
		description: this.props.description
	}

	edit(){
		this.setState({isEditing: true})
	}

	save(e, form){
		e.preventDefault()
		app.patch(app.concept_path(1), form).then(e => {
			this.setState({isSubmitting: false, isEditing: false})
			this.setState(form)
		})
		this.setState({isSubmitting: true})
	}

	render(){
		return <Container>
			<Segment>
				<Button basic icon="write" floated="right" circular onClick={::this.edit} />
				<Header as='h2' floated="left">
					{this.state.name}
					<Header.Subheader>Alias: {this.state.alias}</Header.Subheader>
				</Header>
				<Divider clearing/>
				<p>
					{this.state.description}
				</p>
			</Segment>
			<Modal open={this.state.isEditing}>
				<Modal.Header>Edit Concept</Modal.Header>
				<Modal.Content>
					<Form onSubmit={::this.save} ref="conceptForm" loading={this.state.isSubmitting}>
						<Form.Field control={Form.Input} name="name" defaultValue={this.state.name} label="Name" />
						<Form.Field control={Form.Input} name="alias" defaultValue={this.state.alias} label="Alias (comma for division)" />
						<Form.Field control={Form.TextArea} name="description" defaultValue={this.state.description} label="Description" />
						<Form.Field control={Button} primary content="Submit" />
					</Form>
				</Modal.Content>
			</Modal>
		</Container>
	}
}