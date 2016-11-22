import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Page, Section, Header, Expandable, Modal, Button, Form} from './ui'
import AspectSection from './aspect_section'

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

	save(e){
		e.preventDefault()
		var formData = new FormData(e.target)
		app.patch(app.concept_path(1), formData).then(e => {
			this.setState({isSubmitting: false, isEditing: false})
			var data = {}
			formData.kq(Array.from).map(([k,v]) => data[k] = v)
			this.setState(data)
		})
		this.setState({isSubmitting: true})
	}

	handleModalCancel(){
		this.setState({isEditing: false})
	}

	render(){
		var subtitle = this.state.alias && this.state.alias.length > 0 ? `Alias: ${this.state.alias}` : null
		return <Page>
			<Section editable deletable onEdit={::this.edit} onDelete={e=>e}>
				<Header title={this.state.name} subtitle={subtitle}/>
				<br />
				{this.state.description}
			</Section>
			{this.state.aspects.map(a => do {
				<AspectSection id={a.id} name={a.name} description={a.description} />
			})}
			<Modal opened={this.state.isEditing}>
				<Form onSubmit={::this.save}>
					<Form.TextField name="name" label="Name" defaultValue={this.state.name} />
					<Form.TextField name="alias" label="Alias(use comma for separation)" defaultValue={this.state.alias} />
					<Form.TextArea name="description" label="Description" defaultValue={this.state.description}/>
					<Button color="blue" type="submit">Save</Button>
					<Button onClick={::this.handleModalCancel}>Cancel</Button>
				</Form>
			</Modal>
		</Page>
	}
}