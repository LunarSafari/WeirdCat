import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Container, Header, Segment, Button, Divider, Modal, Form, Accordion, Icon} from 'semantic-ui-react'

export default class ConceptCard extends React.Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		alias: PropTypes.string,
		description: PropTypes.string,
		aspects: PropTypes.array
	}

	state = {
		isEditing: false,
		isSubmitting: false,
		name: this.props.name,
		alias: this.props.alias,
		description: this.props.description,
		aspects: this.props.aspects
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
				<Header as='h2' floated="left">
					{this.state.name}
					{do{
						if(this.state.alias.length > 0){
							<Header.Subheader>Alias: {this.state.alias}</Header.Subheader>
						}
					}}
				</Header>
				<Button basic icon="remove" floated="right" circular onClick={::this.edit} />
				<Button basic icon="write" floated="right" circular onClick={::this.edit} />
				<Divider clearing/>
				<p>
					{this.state.description}
				</p>
			</Segment>
			<Accordion styled fluid>
				{this.state.aspects.map(a => [
					<Accordion.Title as="h2">
						<Icon name="dropdown"/>
						{a.name}
						<Button basic icon="remove" size="mini" floated="right" onClick={::this.edit} />
						<Button basic icon="write" size="mini" floated="right" onClick={::this.edit} />
					</Accordion.Title>,
					<Accordion.Content>{a.description}</Accordion.Content>
				])}
			</Accordion>
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